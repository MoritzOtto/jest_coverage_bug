process.env.TZ = "UTC";

module.exports = {
  preset: "jest-preset-angular",
  rootDir: ".",
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  testPathIgnorePatterns: ["plugins", "environments", "tools"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageReporters: ["lcov", "html", "json"],
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/serializers/html-comment",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@ionic|ionicons|@ngrx|cordova-plugin-contacts-x))",
  ],
  setupFilesAfterEnv: [`<rootDir>/test-setup.ts`],
  clearMocks: true,
  testEnvironment: "jsdom",
  resolver: "@nrwl/jest/plugins/resolver",
  reporters: [
    "default",
    [
      "jest-slow-test-reporter",
      {numTests: 5, warnOnSlowerThan: 500, color: true},
    ],
  ],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      isolatedModules: false,
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
};
