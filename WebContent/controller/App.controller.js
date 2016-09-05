sap.ui.define([
	"sap/ui/core/mvc/Controller", // Required module
	"sap/m/MessageToast"          // Required module

], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.App", {
		onShowHello : function() {
			MessageToast.show("Hereby I toast to the world")
		}
	});
});