$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("github_login.feature");
formatter.feature({
  "line": 1,
  "name": "login Page",
  "description": "In order to test login page\r\nAs a Registered user\r\nI want to specify the login conditions",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 50042588940,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nminVersion\":null,\"maxVersion\":null}],\"targetPlatforms\":[],\"seen\":true,\"dependencies\":[],\"hasEmbeddedWebExtension\":false,\"userPermissions\":{\"permissions\":[\"tabs\"],\"origins\":[\"\u003call_urls\u003e\"]},\"icons\":{\"16\":\"icons/lightbulb.svg\",\"32\":\"icons/lightbulb.svg\",\"48\":\"icons/lightbulb.svg\",\"96\":\"icons/lightbulb.svg\",\"128\":\"icons/lightbulb.svg\"},\"iconURL\":null,\"icon64URL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1550079143053\taddons.xpi\tDEBUG\tUpdating XPIState for {\"id\":\"webcompat@mozilla.org\",\"syncGUID\":\"{da5a365f-97ec-4daf-aacb-7f802fe7c2db}\",\"version\":\"3.0.0\",\"type\":\"webextension\",\"updateURL\":null,\"optionsURL\":null,\"optionsType\":null,\"optionsBrowserStyle\":true,\"aboutURL\":null,\"defaultLocale\":{\"name\":\"Web Compat\",\"description\":\"Urgent post-release fixes for web compatibility.\",\"creator\":null,\"developers\":null,\"translators\":null,\"contributors\":null},\"visible\":true,\"active\":true,\"userDisabled\":false,\"appDisabled\":false,\"installDate\":1545141205440,\"updateDate\":1545141205440,\"applyBackgroundUpdates\":1,\"path\":\"C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\browser\\\\features\\\\webcompat@mozilla.org.xpi\",\"skinnable\":false,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":false,\"strictCompatibility\":true,\"locales\":[],\"targetApplications\":[{\"id\":\"toolkit@mozilla.org\",\"minVersion\":\"59.0b5\",\"maxVersion\":null}],\"targetPlatforms\":[],\"seen\":true,\"dependencies\":[],\"hasEmbeddedWebExtension\":false,\"userPermissions\":{\"permissions\":[\"webRequest\",\"webRequestBlocking\"],\"origins\":[\"\u003call_urls\u003e\"]},\"icons\":{},\"iconURL\":null,\"icon64URL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1550079143054\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1550079143060\taddons.xpi\tDEBUG\tCalling bootstrap method startup on formautofill@mozilla.org version 1.0\r\n1550079143069\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 35.0.0\r\n1550079143073\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 3.0.0\r\n1550079143082\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1550079143082\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1550079143083\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1550079143083\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1550079143084\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1550079143086\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1550079143094\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1550079143095\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1550079143095\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1550079143095\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1550079143096\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1550079143111\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1550079145969\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 27\r\n1550079146517\taddons.repository\tDEBUG\tNo addons.json found.\r\n1550079148990\taddons.manager\tDEBUG\tRegistering upgrade listener for formautofill@mozilla.org\r\n1550079149273\taddons.xpi\tDEBUG\tIgnoring file: name is not a valid add-on ID: C:\\Users\\Dell\\AppData\\Local\\Temp\\anonymous3572815918358659110webdriver-profile\\extensions\\webdriver-staging\r\n1550079149274\taddons.xpi\tDEBUG\tExisting add-on formautofill@mozilla.org in app-system-defaults\r\n1550079149275\taddons.xpi\tDEBUG\tExisting add-on screenshots@mozilla.org in app-system-defaults\r\n1550079149276\taddons.xpi\tDEBUG\tExisting add-on webcompat-reporter@mozilla.org in app-system-defaults\r\n1550079149277\taddons.xpi\tDEBUG\tExisting add-on webcompat@mozilla.org in app-system-defaults\r\n1550079149279\taddons.xpi\tDEBUG\tscanForChanges changed: false, state: {}\r\nJavaScript error: resource://gre/modules/addons/XPIProvider.jsm, line 2600: TypeError: addon is null\r\n\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Dell-PC\u0027, ip: \u0027192.168.140.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.cucumber.automation.utils.DriverFactory.createDriver(DriverFactory.java:27)\r\n\tat com.cucumber.automation.bdt.stepDefinitions.Hooks.beforeScenario(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nminVersion\":null,\"maxVersion\":null}],\"targetPlatforms\":[],\"seen\":true,\"dependencies\":[],\"hasEmbeddedWebExtension\":false,\"userPermissions\":{\"permissions\":[\"tabs\"],\"origins\":[\"\u003call_urls\u003e\"]},\"icons\":{\"16\":\"icons/lightbulb.svg\",\"32\":\"icons/lightbulb.svg\",\"48\":\"icons/lightbulb.svg\",\"96\":\"icons/lightbulb.svg\",\"128\":\"icons/lightbulb.svg\"},\"iconURL\":null,\"icon64URL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1550079143053\taddons.xpi\tDEBUG\tUpdating XPIState for {\"id\":\"webcompat@mozilla.org\",\"syncGUID\":\"{da5a365f-97ec-4daf-aacb-7f802fe7c2db}\",\"version\":\"3.0.0\",\"type\":\"webextension\",\"updateURL\":null,\"optionsURL\":null,\"optionsType\":null,\"optionsBrowserStyle\":true,\"aboutURL\":null,\"defaultLocale\":{\"name\":\"Web Compat\",\"description\":\"Urgent post-release fixes for web compatibility.\",\"creator\":null,\"developers\":null,\"translators\":null,\"contributors\":null},\"visible\":true,\"active\":true,\"userDisabled\":false,\"appDisabled\":false,\"installDate\":1545141205440,\"updateDate\":1545141205440,\"applyBackgroundUpdates\":1,\"path\":\"C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\browser\\\\features\\\\webcompat@mozilla.org.xpi\",\"skinnable\":false,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":false,\"strictCompatibility\":true,\"locales\":[],\"targetApplications\":[{\"id\":\"toolkit@mozilla.org\",\"minVersion\":\"59.0b5\",\"maxVersion\":null}],\"targetPlatforms\":[],\"seen\":true,\"dependencies\":[],\"hasEmbeddedWebExtension\":false,\"userPermissions\":{\"permissions\":[\"webRequest\",\"webRequestBlocking\"],\"origins\":[\"\u003call_urls\u003e\"]},\"icons\":{},\"iconURL\":null,\"icon64URL\":null,\"blocklistState\":0,\"blocklistURL\":null,\"startupData\":null,\"hidden\":true,\"installTelemetryInfo\":null,\"location\":\"app-system-defaults\"}\r\n1550079143054\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1550079143060\taddons.xpi\tDEBUG\tCalling bootstrap method startup on formautofill@mozilla.org version 1.0\r\n1550079143069\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 35.0.0\r\n1550079143073\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 3.0.0\r\n1550079143082\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1550079143082\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1550079143083\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1550079143083\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1550079143084\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1550079143086\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1550079143094\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1550079143095\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1550079143095\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1550079143095\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1550079143096\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1550079143111\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1550079145969\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 27\r\n1550079146517\taddons.repository\tDEBUG\tNo addons.json found.\r\n1550079148990\taddons.manager\tDEBUG\tRegistering upgrade listener for formautofill@mozilla.org\r\n1550079149273\taddons.xpi\tDEBUG\tIgnoring file: name is not a valid add-on ID: C:\\Users\\Dell\\AppData\\Local\\Temp\\anonymous3572815918358659110webdriver-profile\\extensions\\webdriver-staging\r\n1550079149274\taddons.xpi\tDEBUG\tExisting add-on formautofill@mozilla.org in app-system-defaults\r\n1550079149275\taddons.xpi\tDEBUG\tExisting add-on screenshots@mozilla.org in app-system-defaults\r\n1550079149276\taddons.xpi\tDEBUG\tExisting add-on webcompat-reporter@mozilla.org in app-system-defaults\r\n1550079149277\taddons.xpi\tDEBUG\tExisting add-on webcompat@mozilla.org in app-system-defaults\r\n1550079149279\taddons.xpi\tDEBUG\tscanForChanges changed: false, state: {}\r\nJavaScript error: resource://gre/modules/addons/XPIProvider.jsm, line 2600: TypeError: addon is null\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "login without username and password",
  "description": "",
  "id": "login-page;login-without-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user gets an error message \"Incorrect username or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username or password.",
      "offset": 28
    }
  ],
  "location": "GithubLoginSD.user_gets_an_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 314747,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.automation.utils.DriverFactory.teardown(DriverFactory.java:41)\r\n\tat com.cucumber.automation.bdt.stepDefinitions.Hooks.afterScenario(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});