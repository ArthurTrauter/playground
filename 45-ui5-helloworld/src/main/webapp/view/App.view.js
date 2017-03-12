(function(){
"use strict";

	sap.ui.jsview("sap.ui.demo.xtr.helloWorld.view.App", {
		createContent: function() {
			var app = new sap.m.App("myApp", {
				initialPage: "page1"
			});

			var page1 = new sap.m.Page("page1", {
				title: "{/pageTitle1}",
				showNavButton: false,
				content: new sap.m.Button({
					text: "{/buttonName}",
					press: function() {
						app.to("page2");
					}
				})
			});

			var page2 = new sap.m.Page("page2", {
				title: "{/pageTitle2}",
				showNavButton: true,
				navButtonPress: function() {
					app.back();
				}
			});

			app.addPage(page1).addPage(page2);

			return app;
		}
	});

}());