// This file will be called before each test file in the suite is executed
// core.js has to be imported before jest-preset-angular!
import "core-js/es/reflect";
import "core-js/proposals/reflect-metadata";
import "jest-preset-angular/setup-jest";

import {registerLocaleData} from "@angular/common";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";

registerLocaleData(localeDe, localeDeExtra);

// We override the console.error function to verify if the tests are throwing any exceptions
// and to fail the test
const consoleErrorFunction = global.console.error;
beforeAll(() => {
  global.console.error = (...args) => {
    consoleErrorFunction(...args);
    fail(args[0]);
  };
});

afterEach(() => {
  // Check if the test has any assertions
  // testing asynchronous code can lead to false positive tests which means that it can happen
  // that the test passes successfully independently of the expected result
  // read https://www.pluralsight.com/guides/test-asynchronous-code-jest for a detailed description
  expect.hasAssertions();
});
