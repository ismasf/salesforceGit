public with sharing class ING_Table_cntr {
	@AuraEnabled
	public static List<sObject> getDatos(String sentencia){
		//String s = 'SELECT Id,Name FROM Account';
		
		return Database.query(sentencia);
	}


}