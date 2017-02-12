({
	meterDatosTabla : function(cmp, evt, helper) {
		console.log('a meter datos');
		var action = cmp.get("c.getDatos");
		action.setParams({"sentencia": cmp.get('v.sentenciaSQL')});
		action.setCallback(this, function(response) {
            if (cmp.isValid() && response.getState() === "SUCCESS") {
                var ret = response.getReturnValue();
                var datosCoger = cmp.get("v.lstDatosCoger");
                console.log(datosCoger);
                var mandar = [[]];
                var bueno = [];
                console.log(ret);
                for(var i in ret){
                	console.log(ret[i]["Id"]);
                	for(var j in datosCoger){
                		bueno[bueno.length]=ret[i][datosCoger[j]];
                	}
                	mandar.push(bueno);
                	bueno = [];
                }
                console.log(bueno);
                console.log(mandar);
                cmp.set('v.datoTable2.fila', mandar);
                console.log('aaaaaaaa');
            }
            else{
                alert('Se ha producido un error en la comunicación con el servidor. Inténtelo más tarde y si el error persiste contacte con su administrador.');
            }
        });
        $A.enqueueAction(action);
	}
})