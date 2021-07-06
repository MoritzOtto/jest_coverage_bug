const nxPreset = require("@nrwl/jest/preset");

module.exports = {
  ...nxPreset,
  testPathIgnorePatterns: ["plugins", "environments", "tools"],
  transformIgnorePatterns: ["node_modules/(?!(@ionic|ionicons))"],
  clearMocks: true,
};
