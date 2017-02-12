({
	gotoRecord : function(component, event, helper) {
		//fire the event to navigate to the contact record
		var sObjectEvent = $A.get("e.force:navigateToSObject");
		sObjectEvent.setParams({
			"recordId" : component.get("v.contact.Id"),
			"slideDevName" : 'related'
		});
		sObjectEvent.fire();
	},

	editRecord : function(component, event, helper){
		//fire the event to navigate to edit contact page
		var editRecordEvent = component.get("e.force:editRecord");
		editRecordEvent.setParams({
			"recordId" : component.get("v.contact.Id");
		});
		editRecordEvent.fire();
	},

	relatedList : function(component, event, helper){
		var relatedListEvent = component.get("e.force:navigateToRelatedList");
		relatedListEvent.setParams({
			"relatedListId" : "Cases",
			"parentRecordId" : component.get("v.contact.Id");
		});
		relatedListEvent.fire();
	}
})