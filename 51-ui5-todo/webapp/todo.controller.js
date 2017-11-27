sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	'use strict';

	return Controller.extend('app.todo', {
		onInit: function() {
			var oData = {
				ToDos : [
					{ title: "Start this app", completed: true }
				]
			};
			var ccModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(ccModel, "cc");
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