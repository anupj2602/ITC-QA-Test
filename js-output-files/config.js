"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        url: 'http://automationpractice.com',
        username: 'testing6@test.com',
        password: 'Testing4$$'
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'reports/screenshots'
        }));
    },
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    /*multiCapabilities:[
    {
      shardTestFiles: true,
      maxInstances: 2,
      'browserName': 'chrome',
        metadata: {
          browser: {
            name: 'chrome',
            version: '76'
          },
          device: 'Windows 10',
        }
      },
      {
        shardTestFiles: true,
        maxInstances: 2,
        'browserName': 'internet explorer',
        'ignorePrtectedModeSettings': true,
        metadata:{
          browser:{
            name: 'Internet Explorer',
            version: '11'
          },
          device: 'Windows 10',
        }
      },
    ],*/
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../js-output-files/test-cases/add-to-cart.js'],
    allscriptsTimeout: 500000,
    getPageTimeout: 100000,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTJDO0FBQzNDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFFN0QsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNENBQTRDO0lBQzVDLGVBQWUsRUFBRSw4QkFBOEI7SUFFL0MsTUFBTSxFQUNOO1FBQ0UsR0FBRyxFQUFFLCtCQUErQjtRQUNwQyxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSxZQUFZO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFDO1FBRVIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEwQkk7SUFFSix1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztJQUN2RCxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLGNBQWMsRUFBRSxNQUFNO0lBRXRCLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxNQUFNO0tBQy9CO0NBQ0YsQ0FBQyJ9