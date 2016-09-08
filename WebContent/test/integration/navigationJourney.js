sap.ui.require([
	"sap/ui/test/opaQunit"
], function() {
	"use strict";
	QUnit.module("Navigation");
	opaTest("Should open the Hello dialog", function(Given, When, Then) {
		Given.iStartMyAppInAFrame(jQuery.sap.getResourcePath("sap/ui/demo/src/test", ".html"));
		When.onTheAppPage.iPressTheHelloWithDialogButton();
		Then.onTheAppPage.iShouldSeeTheHelloDialog().and.iTeardownMyAppFrame();
	});
})