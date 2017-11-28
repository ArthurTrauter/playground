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
				todos : [
					{ title: "Start this app", completed: true }
				]
			};

			// json model
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

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
		},
		updateItemsLeftCount: function() {
			var oModel = this.getView().getModel();
			var aTodos = oModel.getProperty('/todos');

			var iItemsLeftCount = aTodos.filter(function(oTodo) {
				return oTodo.completed != true;
			});

			oModel.setProperty('/itemsLeftCount', iItemsLeftCount);
		}
	});
});