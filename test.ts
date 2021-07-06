import "zone.js/dist/zone-testing";

import {getTestBed} from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

declare const require: any;

// Initialize Angular and find all spec files
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
const context = require.context("./", true, /\.spec\.ts$/);
context.keys().map(context);
