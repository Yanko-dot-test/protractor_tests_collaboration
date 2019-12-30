import { Config } from 'protractor';
export let config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  capabilities: {
    'browserName': 'chrome' 
  },
  framework: 'jasmine',
  specs: ['./specs/*.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  // onPrepare: () => {
  //  let globals = require('protractor');
  //  let browser = globals.browser;
  //  browser.manage().window().maximize();
  //  browser.manage().timeouts().implicitlyWait(5000);
  // }
}
