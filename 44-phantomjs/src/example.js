var page = require('webpage').create();
var sTestPath = "http://localhost:8080/testsuite/test-resources/sap/ui/rta/qunit/RTAControlEnabling.qunit.html";
var sOutput = "example.png";
page.viewportSize = { width: 900, height: 1200 };
page.open(sTestPath, function(status) {
  console.log("Status: " + status);
	if (status !== 'success') {
			console.log(status, '- Unable to load the address!');
			phantom.exit(1);
	} else {
			window.setTimeout(function () {
					page.render(sOutput);
					phantom.exit();
			}, 2000);
	}
  phantom.exit();
});
