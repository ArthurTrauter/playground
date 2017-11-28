sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(
	Controller,
	JSONModel,
	ResourceModel
) {
	'use strict';

	return Controller.extend('app.todo', {
		onInit: function() {
			var oData = {
				ToDos : [
					{ title: "Start this app", completed: true }
				]
			};

			// json model
			var ccModel = new JSONModel(oData);
			this.getView().setModel(ccModel, "cc");

			// resource model
			var oResourceModel = new sap.ui.model.resource.ResourceModel({
				bundleName : "app.i18n.i18n"
			});
			this.getView().setModel(oResourceModel, "i18n");

		},
		onSelectionChange: function() {
			alert("onSelectionChange");
		},
		onPressClearCompleted: function() {
			alert("onPressClearCompleted");
		},
		onSearch: function() {
			alert("onSearch");
		}
	});
});