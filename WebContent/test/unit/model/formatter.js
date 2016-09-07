sap.ui.require([
	"sap/ui/demo/wt/model/formatter",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function(formatter, ResourceModel) {
	"use strict";
	QUnit.module("Formatting functions", {
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl : jQuery.sap.getModulePath("sap.ui.demo.wt", "/i18n/i18n.properties")
			});
		},
		afterEach: function() {
			this._oResourceModel.destroy();
		}
	});
	QUnit.test("Should return translated texts", function(assert) {
		var oViewStub = {
				getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
		}
		var oControllerStub = {
				getView: this.stub().returns(oViewStub)
		}

		var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

		assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
		assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");
		assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
		assert.strictEqual(fnIsolatedFormatter("foo"), "foo", "The long text for unknown status 'foo' is correct");		
	})
})