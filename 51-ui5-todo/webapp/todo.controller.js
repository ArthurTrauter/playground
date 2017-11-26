sap.ui.controller("app.todo", {
	onInit: function() {
		var oData = {
			ToDos : [
				{ title: "Start this app", completed: true }
			]
		};
		var ccModel = new sap.ui.model.json.JSONModel(oData);
		this.getView().setModel(ccModel, "cc");
	}
});
