sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init : function() {
			var oMockServer = new MockServer({
				rootUri : "/destinations/northwind/V2/Northwind/Northwind.svc/"
			});

			var oUriParameters = jQuery.sap.getUriParameters();

			MockServer.config({
				autoRespond : true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			
			var sPath = jQuery.sap.getModulePath("sap.ui.demo.wt.localservice");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			oMockServer.start();
		}
	};
})