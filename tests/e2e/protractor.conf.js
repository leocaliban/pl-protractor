var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const VisualReview = require('visualreview-protractor');


var vr = new VisualReview({
    hostname: 'localhost',
    port: 7000
});

module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['specs/*.spec.js'],
    baseUrl: 'http://www.protractortest.org/',
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSumary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            takeScreenshots: true,
            fixedScreenshotName: true
        }));
    },
    beforeLaunch: function () {
        vr.initRun('Visual-Review-Sample-Project', 'visualReviewSuite');
    },
    afterLaunch: function (exitCode) {
        return vr.cleanup(exitCode);
    },
    params: {
        visualreview: vr
    }
};