({
    getExpenses : function(component) {
        console.log('ccccfcvbcc');
		var action = component.get("c.traerD");
        console.log('ddddddddddddd');
        action.setCallback(this, function(response){
            console.log('bbbbbbbbbbbb');
            var ret = response.getReturnValue();
            component.set("v.lstAccount", ret);
            console.log(ret);
        });
        $A.enqueueAction(action);
        /*action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.expenses", response.getReturnValue());
                this.updateTotal(component);
            }
        });
        $A.enqueueAction(action);*/
	},
	traerDatos : function(cmp, evt, helper) {
        /*console.log('bbbbbbb');
		var action = cmp.get("c.traerD");
        action.setParams({a:cmp.get('v.accountN.Contact')});
        action.setCallback(this, function(response) {
            if (cmp.isValid() && response.getState() === "SUCCESS") {
                var ret = response.getReturnValue();
                Console.log(ret);
            }
            else{
                console.log('ccccccc');
                //alert('Se ha producido un error en la comunicación con el servidor. Inténtelo más tarde y si el error persiste contacte con su administrador.');
            }
            
        });
        $A.enqueueAction(action);*/
            
            
	}
})