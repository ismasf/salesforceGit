public with sharing class LookupComponentCtrl {
	@AuraEnabled
    public static List<Account> traerD(){
        
        return [SELECT Id, Name FROM Account];
    }
        

}