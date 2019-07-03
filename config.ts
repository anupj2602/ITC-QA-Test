import {Config, browser} from "protractor";
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    params:
    {
      url: 'http://automationpractice.com',
      username: 'testing6@test.com',
      password: 'Testing4$$'
    },
    onPrepare:function()
    {
      browser.manage().window().maximize();
      browser.waitForAngularEnabled(false);
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports/screenshots'
        })
      );
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
      showColors: true, // Use colors in the command line report.
      defaultTimeoutInterval: 100000
    },
  };