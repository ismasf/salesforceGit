public with sharing class PDF_01_ContactController {
	@AuraEnabled
	public static List<Contact> getContacts(){
		List<Contact> lstContactos = [SELECT Id, Name, MailingStreet, Phone, Email, Level__c FROM Contact];
		return lstContactos;
	}
	@AuraEnabled
	public static List<Contact> getPrimary(){
		List<Contact> lstContactos = [SELECT Id, Name, MailingStreet, Phone, Email, Level__c FROM Contact WHERE Level__c = 'Primary'];
		return lstContactos;
	}


}