(function() {
    'use strict';

    //phantomjs test.js

    var system = require('system');
    var args = system.args;

    if (args.length === 1) {
        console.log('Try to pass some arguments when invoking this script!');
    } else {
        args.forEach(function(arg, i) {
            console.log(i + ': ' + arg);
        });
    }

    var oPage = require("webpage").create();
    var sPagePrefix = "http://localhost:8080/testsuite/test-resources/";
    var sPageSuffix = args[1] || "sap/ui/rta/qunit/command/Combine.qunit.html?sap-ui-debug=true";
		var sOutputFile = args[2] || "screenshot.png";

    oPage.settings.resourceTimeout = 5000;

    var sPage = sPagePrefix + sPageSuffix;
    console.log("Opening page: " + sPage);
    oPage.onConsoleMessage = function(msg, lineNum, sourceId) {
        console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
    };
    var bExit = false;
    oPage.open(sPage, function() {
        console.log("ok!");
        setInterval(function() {
            var oReport = oPage.evaluate(function() {
                return window._$jUnitReport;
            });
            if (!bExit && oReport && oReport.results) {
                console.log(JSON.stringify(oReport.results));
                console.log("taking screenshot to " + sOutputFile + "...");
                oPage.render(sOutputFile);
                phantom.exit();
                bExit = true;
            }
        }, 1000);
    });

}());
