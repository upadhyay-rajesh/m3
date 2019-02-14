$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Capture_group.feature");
formatter.feature({
  "line": 1,
  "name": "optional/non optional Capture Groups",
  "description": "",
  "id": "optional/non-optional-capture-groups",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# 2: Recipe 4"
    }
  ],
  "line": 4,
  "name": "optional capture groups/Alternation",
  "description": "",
  "id": "optional/non-optional-capture-groups;optional-capture-groups/alternation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#positive"
    }
  ],
  "line": 6,
  "name": "I see following dollars in my account",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#negative"
    }
  ],
  "line": 8,
  "name": "I do not see following dollars in my account",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " see",
      "offset": 1
    }
  ],
  "location": "CaptureGroupsSteps.I_see_or_do_not_see_following_dollars_in_my_account(String)"
});
formatter.result({
  "duration": 305420304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " do not see",
      "offset": 1
    }
  ],
  "location": "CaptureGroupsSteps.I_see_or_do_not_see_following_dollars_in_my_account(String)"
});
formatter.result({
  "duration": 154712,
  "status": "passed"
});
formatter.after({
  "duration": 1537623,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "# 2: Recipe 4"
    }
  ],
  "line": 11,
  "name": "optional non-capture groups",
  "description": "",
  "id": "optional/non-optional-capture-groups;optional-non-capture-groups",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I have following dollars in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "He has following dollars in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User has following dollars in my account",
  "keyword": "Given "
});
formatter.match({
  "location": "CaptureGroupsSteps.have_following_dollars_in_my_account()"
});
formatter.result({
  "duration": 62721,
  "status": "passed"
});
formatter.match({
  "location": "CaptureGroupsSteps.have_following_dollars_in_my_account()"
});
formatter.result({
  "duration": 44475,
  "status": "passed"
});
formatter.match({
  "location": "CaptureGroupsSteps.have_following_dollars_in_my_account()"
});
formatter.result({
  "duration": 30030,
  "status": "passed"
});
formatter.after({
  "duration": 50557,
  "status": "passed"
});
formatter.uri("english.feature");
formatter.feature({
  "line": 1,
  "name": "sample application",
  "description": "In order to test login page\r\nAs a Registered user\r\nI want to specify the login conditions",
  "id": "sample-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "sample scenario",
  "description": "",
  "id": "sample-application;sample-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on application page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 55118,
  "status": "passed"
});
formatter.uri("home_page.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page",
  "description": "In order to test Home Page of application\nAs a Registered user\nI want to specify the features of home page",
  "id": "home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#  Recipe 5"
    },
    {
      "line": 7,
      "value": "#Background: flow till home page"
    },
    {
      "line": 8,
      "value": "#Given user is on Application home page"
    },
    {
      "line": 9,
      "value": "#When user enters username"
    },
    {
      "line": 10,
      "value": "#And user enters password"
    },
    {
      "line": 11,
      "value": "#And user clicks on login button"
    },
    {
      "line": 12,
      "value": "#Then user is on Application home page"
    },
    {
      "line": 15,
      "value": "#  Recipe 4"
    },
    {
      "line": 16,
      "value": "#Scenario: Home Page Default content"
    },
    {
      "line": 17,
      "value": "# Given user is on Github home page"
    },
    {
      "line": 18,
      "value": "#Then user gets a GitHub bootcamp section"
    },
    {
      "line": 19,
      "value": "#And username is also displayed on right corner"
    },
    {
      "line": 21,
      "value": "#  Recipe 4"
    }
  ],
  "line": 22,
  "name": "GitHub Bootcamp Section",
  "description": "",
  "id": "home-page;github-bootcamp-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user is on GitHub home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user focuses on GitHub Bootcamp Section",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user gets an option to setup git",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user gets an option to create repository",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user gets an option to Fork Repository",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user gets an option to work together",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_GitHub_home_page()"
});
formatter.result({
  "duration": 133425,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_focuses_on_GitHub_Bootcamp_Section()"
});
formatter.result({
  "duration": 45616,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_to_setup_git()"
});
formatter.result({
  "duration": 43335,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_to_create_repository()"
});
formatter.result({
  "duration": 45615,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_to_Fork_Repository()"
});
formatter.result({
  "duration": 45615,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_to_work_together()"
});
formatter.result({
  "duration": 51697,
  "status": "passed"
});
formatter.after({
  "duration": 57019,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 30,
      "value": "#  Recipe 4"
    }
  ],
  "line": 31,
  "name": "Top Banner content",
  "description": "",
  "id": "home-page;top-banner-content",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user is on GitHub home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user focuses on Top Banner",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user gets an option of home page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user gets an option to search",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user gets settings options",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user gets an option to logout",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_GitHub_home_page()"
});
formatter.result({
  "duration": 74506,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_focuses_on_Top_Banner()"
});
formatter.result({
  "duration": 47896,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_of_home_page()"
});
formatter.result({
  "duration": 51317,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_to_search()"
});
formatter.result({
  "duration": 41814,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_settings_options()"
});
formatter.result({
  "duration": 45615,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_gets_an_option_to_logout()"
});
formatter.result({
  "duration": 37633,
  "status": "passed"
});
formatter.after({
  "duration": 122782,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login Page",
  "description": "In order to test login page\nAs a Registered user\nI want to specify the login conditions",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "login flow",
  "description": "login should be quick and easy",
  "id": "login-page;login-flow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#  1: Recipe 3, 6"
    },
    {
      "line": 10,
      "value": "#  2: Recipe 3"
    }
  ],
  "line": 11,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Sign in button is present on screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters \"ShankarGarg\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"123456\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "title of home page is \"GitHub\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Sign in button is not present",
  "keyword": "But "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 150912,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sign_in_button_is_present_on_screen()"
});
formatter.result({
  "duration": 106817,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 55879,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 36493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShankarGarg",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_username_field(String)"
});
formatter.result({
  "duration": 208311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 187024,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_clicks_Sign_in_button()"
});
formatter.result({
  "duration": 43714,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 50177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GitHub",
      "offset": 23
    }
  ],
  "location": "LoginSteps.title_of_home_page_is(String)"
});
formatter.result({
  "duration": 106816,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sign_in_button_is_not_present()"
});
formatter.result({
  "duration": 37633,
  "status": "passed"
});
formatter.after({
  "duration": 50558,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#  1: Recipe 6"
    }
  ],
  "line": 23,
  "name": "New User Registration",
  "description": "",
  "id": "login-page;new-user-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"ShankarGarg\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enters \"sgarg@gmail.com\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters \"123456\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user clicks on Signup for GitHub button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user is successfully registered",
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 68804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShankarGarg",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_username_field(String)"
});
formatter.result({
  "duration": 223136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sgarg@gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 177141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 146730,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Signup_for_GitHub_button()"
});
formatter.result({
  "duration": 49797,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_successfully_registered()"
});
formatter.result({
  "duration": 51697,
  "status": "passed"
});
formatter.after({
  "duration": 51317,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#  1: Recipe 7"
    },
    {
      "line": 32,
      "value": "#  2: Recipe 5"
    }
  ],
  "line": 33,
  "name": "Existing user Verification",
  "description": "",
  "id": "login-page;existing-user-verification",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "we verify following user exists",
  "rows": [
    {
      "cells": [
        "Name",
        "Email",
        "Phone"
      ],
      "line": 36
    },
    {
      "cells": [
        "Shankar",
        "sgarg@email.com",
        "999"
      ],
      "line": 37
    },
    {
      "cells": [
        "Ram",
        "ram@email.com",
        "888"
      ],
      "line": 38
    },
    {
      "cells": [
        "Sham",
        "sham@email.org",
        "666"
      ],
      "line": 39
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 72605,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.we_verify_following_user_exists(DataTable)"
});
formatter.result({
  "duration": 2760880,
  "status": "passed"
});
formatter.after({
  "duration": 93132,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "#  1: Recipe 8"
    }
  ],
  "line": 42,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "login-page;login-fail---possible-combinations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user enters \"\u003cUserName\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters \"\u003cPassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "login-page;login-fail---possible-combinations;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 52,
      "id": "login-page;login-fail---possible-combinations;;1"
    },
    {
      "cells": [
        "wrongusername",
        "123456"
      ],
      "line": 53,
      "id": "login-page;login-fail---possible-combinations;;2"
    },
    {
      "cells": [
        "ShankarGarg",
        "wrongpassword"
      ],
      "line": 54,
      "id": "login-page;login-fail---possible-combinations;;3"
    },
    {
      "cells": [
        "wrongusername",
        "wrongpassword"
      ],
      "line": 55,
      "id": "login-page;login-fail---possible-combinations;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "login-page;login-fail---possible-combinations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user enters \"wrongusername\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 75646,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 67663,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 60441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongusername",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_username_field(String)"
});
formatter.result({
  "duration": 158894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 133425,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_clicks_Sign_in_button()"
});
formatter.result({
  "duration": 34972,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_gets_login_failed_error_message()"
});
formatter.result({
  "duration": 43335,
  "status": "passed"
});
formatter.after({
  "duration": 51317,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "login-page;login-fail---possible-combinations;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user enters \"ShankarGarg\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters \"wrongpassword\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 66523,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 48276,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 28129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShankarGarg",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_username_field(String)"
});
formatter.result({
  "duration": 130004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongpassword",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 117840,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_clicks_Sign_in_button()"
});
formatter.result({
  "duration": 34212,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_gets_login_failed_error_message()"
});
formatter.result({
  "duration": 30030,
  "status": "passed"
});
formatter.after({
  "duration": 42954,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "login-page;login-fail---possible-combinations;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user enters \"wrongusername\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters \"wrongpassword\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 75266,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 50558,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 29650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongusername",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_username_field(String)"
});
formatter.result({
  "duration": 169918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongpassword",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 141408,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_clicks_Sign_in_button()"
});
formatter.result({
  "duration": 29650,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_gets_login_failed_error_message()"
});
formatter.result({
  "duration": 27369,
  "status": "passed"
});
formatter.after({
  "duration": 45996,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "#  2: Recipe 6"
    }
  ],
  "line": 58,
  "name": "Table Diff",
  "description": "",
  "id": "login-page;table-diff",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "user send a get request to \"localhost:8080/e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "user gets following response",
  "rows": [
    {
      "cells": [
        "username",
        "age"
      ],
      "line": 61
    },
    {
      "cells": [
        "sham",
        "25"
      ],
      "line": 62
    },
    {
      "cells": [
        "ram",
        "26"
      ],
      "line": 63
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "localhost:8080/e",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_send_a_get_request_to(String)"
});
formatter.result({
  "duration": 146350,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_gets_following_response(DataTable)"
});
formatter.result({
  "duration": 34690991,
  "status": "passed"
});
formatter.after({
  "duration": 55879,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 65,
      "value": "#  2: Recipe 7"
    }
  ],
  "line": 66,
  "name": "Doc String",
  "description": "",
  "id": "login-page;doc-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "a book named \"cucumber \" with following body",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 68,
    "value": "Title  Cucumber \nAuthor of this book is first time writer so please excuse the naïve mistakes. But he will definitely improve with s he writes.  "
  }
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber ",
      "offset": 14
    }
  ],
  "location": "LoginSteps.a_book_named_with_following_body(String,String)"
});
formatter.result({
  "duration": 339076,
  "status": "passed"
});
formatter.after({
  "duration": 39913,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 73,
      "value": "#  2: Recipe 8"
    }
  ],
  "line": 74,
  "name": "Email content verification",
  "description": "",
  "id": "login-page;email-content-verification",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I have a user account with \u003cRole\u003e rights",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I should receive an email with the body:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 77,
    "value": "Dear user,\nYou have been granted \u003cRole\u003e rights.  You are \u003cdetails\u003e. Please be     \nresponsible.\n-The Admins"
  }
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "login-page;email-content-verification;",
  "rows": [
    {
      "cells": [
        "Role",
        "details"
      ],
      "line": 85,
      "id": "login-page;email-content-verification;;1"
    },
    {
      "cells": [
        "Manager",
        "now able to manage your employee accounts"
      ],
      "line": 86,
      "id": "login-page;email-content-verification;;2"
    },
    {
      "cells": [
        "Admin",
        "able to manage any user account on the system"
      ],
      "line": 87,
      "id": "login-page;email-content-verification;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "Email content verification",
  "description": "",
  "id": "login-page;email-content-verification;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I have a user account with Manager rights",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I should receive an email with the body:",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 77,
    "value": "Dear user,\nYou have been granted Manager rights.  You are now able to manage your employee accounts. Please be     \nresponsible.\n-The Admins"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 27
    }
  ],
  "location": "LoginSteps.i_have_a_user_account_with_Manager_rights(String)"
});
formatter.result({
  "duration": 169537,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_email_with_the_body(String)"
});
formatter.result({
  "duration": 143309,
  "status": "passed"
});
formatter.after({
  "duration": 38773,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Email content verification",
  "description": "",
  "id": "login-page;email-content-verification;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I have a user account with Admin rights",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I should receive an email with the body:",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 77,
    "value": "Dear user,\nYou have been granted Admin rights.  You are able to manage any user account on the system. Please be     \nresponsible.\n-The Admins"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 27
    }
  ],
  "location": "LoginSteps.i_have_a_user_account_with_Manager_rights(String)"
});
formatter.result({
  "duration": 241002,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_email_with_the_body(String)"
});
formatter.result({
  "duration": 149011,
  "status": "passed"
});
formatter.after({
  "duration": 39914,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 89,
      "value": "#  2: Recipe 9"
    }
  ],
  "line": 90,
  "name": "Date Format",
  "description": "",
  "id": "login-page;date-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "My Birthday is on",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1505693,
  "status": "passed"
});
formatter.uri("page_load.feature");
formatter.feature({
  "line": 1,
  "name": "Test Git web Application",
  "description": "In order to Test Git web Application\nAs a user\nI want to specify the application flow",
  "id": "test-git-web-application",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#  1, Recipe 1"
    }
  ],
  "line": 7,
  "name": "Web Site loads",
  "description": "application page load should be quick",
  "id": "test-git-web-application;web-site-loads",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "application URL is ready with the user",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters the URL in browser",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "application page loads",
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.application_URL_is_ready_with_the_user()"
});
formatter.result({
  "duration": 69183,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_enters_the_URL_in_browser()"
});
formatter.result({
  "duration": 37252,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.application_page_loads()"
});
formatter.result({
  "duration": 35352,
  "status": "passed"
});
formatter.after({
  "duration": 62722,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#  1, Recipe 2"
    },
    {
      "line": 15,
      "value": "# 2, Recipe 1, Recipe 2"
    }
  ],
  "line": 16,
  "name": "checking pre-condition, action and results",
  "description": "",
  "id": "test-git-web-application;checking-pre-condition,-action-and-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user is on Application landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user is on login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_Application_landing_page()"
});
formatter.result({
  "duration": 67663,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_clicks_Sign_in_button()"
});
formatter.result({
  "duration": 27369,
  "status": "passed"
});
formatter.match({
  "location": "PageLoadSteps.user_is_on_login_screen()"
});
formatter.result({
  "duration": 34211,
  "status": "passed"
});
formatter.after({
  "duration": 30030,
  "status": "passed"
});
formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "sample",
  "description": "",
  "id": "sample",
  "keyword": "Feature"
});
});