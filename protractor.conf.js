// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var reporter = new Jasmine2HtmlReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});
exports.config = {
  allScriptsTimeout: 150000,
  specs: [
//authentification
// 'e2e/specs/authentication/login.e2e-spec.ts',    
// 'e2e/specs/authentication/password_resset.e2e-spec.ts',  

//leavegi
'e2e/specs/leave/leaveRequest/leaveWithoutPay.e2e-spec.ts',
'e2e/specs/leave/leaveResponse/manager/leaveWithoutPay.e2e-spec.ts',
'e2e/specs/leave/leaveResponse/rh/leaveWithoutPay.e2e-spec.ts',

'e2e/specs/leave/leaveRequest/leaveBereavement.e2e-spec.ts',
'e2e/specs/leave/leaveResponse/manager/leaveBereavement.e2e-spec.ts',
'e2e/specs/leave/leaveResponse/rh/leaveBereavement.e2e-spec.ts',

'e2e/specs/leave/leaveRequest/leaveDisease.e2e-spec.ts',      
'e2e/specs/leave/leaveResponse/manager/leaveDisease.e2e-spec.ts',           
'e2e/specs/leave/leaveResponse/rh/leaveDisease.e2e-spec.ts',

'e2e/specs/leave/leaveRequest/leavePaid.e2e-spec.ts',      
'e2e/specs/leave/leaveResponse/manager/leavePaid.e2e-spec.ts',           
'e2e/specs/leave/leaveResponse/rh/leavePaid.e2e-spec.ts',

'e2e/specs/leave/leaveRequest/leaveMarriage.e2e-spec.ts',      
'e2e/specs/leave/leaveResponse/manager/leaveMarriage.e2e-spec.ts',  
'e2e/specs/leave/notifications/leaveMarriage.e2e-spec.ts',  
'e2e/specs/leave/leaveResponse/rh/leaveMarriage.e2e-spec.ts',

'e2e/specs/leave/leaveRequest/leaveBirth.e2e-spec.ts',
'e2e/specs/leave/leaveResponse/manager/leaveBirth.e2e-spec.ts',
'e2e/specs/leave/leaveResponse/rh/leaveBirth.e2e-spec.ts',

// 'e2e/specs/leave/leaveRequest/leaveMaternity.e2e-spec.ts',
// 'e2e/specs/leave/leaveResponse/manager/leaveMaternity.e2e-spec.ts',
// 'e2e/specs/leave/leaveResponse/rh/leaveMaternity.e2e-spec.ts',

//  'e2e/specs/leave/leaveSearch.e2e-spec.ts ' ,
//  'e2e/specs/leave/leaveExport.e2e-spec.ts ' 



  ],

  capabilities: {
    'browserName': 'chrome',
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
  
    print: function() {}
  },
  maxSessions: 1,
  

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  //   browser.driver.manage().window().maximize();
  //   jasmine.getEnv().addReporter(
  //       new Jasmine2HtmlReporter({
  //           savePath: 'target/screenshots', // put your destination file
  //       })
  //   );
    
     browser.driver.manage().window().maximize();
    
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
  }));

 
  var jasmineReporters = require('jasmine-reporters');
  jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
  }));

var fs = require('fs-extra');
 fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
  },
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       platform = caps.get('platform');

       var HTMLReport = require('protractor-html-reporter-2');

       testConfig = {
           reportTitle: 'Protractor Test Execution Report',
           outputPath: './',
           outputFilename: 'ProtractorTestReport',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true,
           testPlatform: platform
       };
       new HTMLReport().from('xmlresults.xml', testConfig);
   });
}
  
};
