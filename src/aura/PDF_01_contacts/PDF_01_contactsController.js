({
	doInit : function(component, event, helper) {
		// Retrieve contacts during component initialization
		helper.getContacts(component);
	},
	createRecord : function(component, event, helper){
		var createRecordEvent = $A.get("e.force:createRecord");
		createRecordEvent.setParams({
			"entityApiName" : "Contact"
		});
		createRecordEvent.fire();
	},

	select : function(component, event, helper){
		var selectCmp = component.find("selection");
	}
})