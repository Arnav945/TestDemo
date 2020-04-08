$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/F001/SearchTrackingWithScan.feature");
formatter.feature({
  "line": 1,
  "name": "Create New case without Tracking Number",
  "description": "",
  "id": "create-new-case-without-tracking-number",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "create-new-case-without-tracking-number;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Testing environment is L2",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login to EBS",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User opens New Case",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And User waits for 3s"
    }
  ],
  "line": 8,
  "name": "User types \u003ctracking_no\u003e on NewCase.TrackingNumberInput",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on NewCase.SearchButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on NewCase.MessageOKButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on NewCase.ShipperRadio",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects \"Email\" on NewCase.IncomingChannelInput",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User types \"First name\" on NewCase.FirstNameInput",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User types \"Last name\" on NewCase.LastNameInput",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User types \"123-456-7890\" on NewCase.PhoneNumberInput",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects \"Clearance\" on Newcase.CaseTypeDropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects \"CPW\" on Newcase.SubCategoryDropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on NewCase.CaseNotes",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "create-new-case-without-tracking-number;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "tracking_no"
      ],
      "line": 24,
      "id": "create-new-case-without-tracking-number;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "\"794952837806\""
      ],
      "line": 25,
      "id": "create-new-case-without-tracking-number;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10807394900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "create-new-case-without-tracking-number;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Testing environment is L2",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login to EBS",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User opens New Case",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And User waits for 3s"
    }
  ],
  "line": 8,
  "name": "User types \"794952837806\" on NewCase.TrackingNumberInput",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on NewCase.SearchButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on NewCase.MessageOKButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on NewCase.ShipperRadio",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects \"Email\" on NewCase.IncomingChannelInput",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User types \"First name\" on NewCase.FirstNameInput",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User types \"Last name\" on NewCase.LastNameInput",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User types \"123-456-7890\" on NewCase.PhoneNumberInput",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects \"Clearance\" on Newcase.CaseTypeDropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects \"CPW\" on Newcase.SubCategoryDropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on NewCase.CaseNotes",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "L2",
      "offset": 23
    }
  ],
  "location": "EBSStep.testing_environment_is(String)"
});fformatter.result({
  "duration": 4424340700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EBS",
      "offset": 14
    }
  ],
  "location": "EBSStep.user_login_to(String)"
});formatter.result({
  "duration": 15623586200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-EFA9OV8D\u0027, ip: \u0027172.20.20.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\RETAIL~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58472}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 79.0.3945.130, webStorageEnabled: true}\nSession ID: a9c9922b62fe0de25c105f46141aae7b\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat step.EBSStep.user_login_to(EBSStep.java:25)\r\n\tat ✽.And User login to EBS(feature/F001/SearchTrackingWithScan.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EBSStep.user_clicks_on_New_Case()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "794952837806",
      "offset": 12
    },
    {
      "val": "NewCase.TrackingNumberInput",
      "offset": 29
    }
  ],
  "location": "EBSStep.user_types_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCase.SearchButton",
      "offset": 15
    }
  ],
  "location": "EBSStep.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCase.MessageOKButton",
      "offset": 15
    }
  ],
  "location": "EBSStep.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCase.ShipperRadio",
      "offset": 15
    }
  ],
  "location": "EBSStep.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 14
    },
    {
      "val": "NewCase.IncomingChannelInput",
      "offset": 24
    }
  ],
  "location": "EBSStep.user_selects_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First name",
      "offset": 12
    },
    {
      "val": "NewCase.FirstNameInput",
      "offset": 27
    }
  ],
  "location": "EBSStep.user_types_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name",
      "offset": 12
    },
    {
      "val": "NewCase.LastNameInput",
      "offset": 26
    }
  ],
  "location": "EBSStep.user_types_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123-456-7890",
      "offset": 12
    },
    {
      "val": "NewCase.PhoneNumberInput",
      "offset": 29
    }
  ],
  "location": "EBSStep.user_types_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Clearance",
      "offset": 14
    },
    {
      "val": "Newcase.CaseTypeDropdown",
      "offset": 28
    }
  ],
  "location": "EBSStep.user_selects_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CPW",
      "offset": 14
    },
    {
      "val": "Newcase.SubCategoryDropdown",
      "offset": 22
    }
  ],
  "location": "EBSStep.user_selects_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCase.CaseNotes",
      "offset": 15
    }
  ],
  "location": "EBSStep.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 676314000,
  "status": "passed"
});
});