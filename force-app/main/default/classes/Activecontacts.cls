public with sharing class Activecontacts {

@InvocableMethod (label='Update Account')
    
        public static void TotalNoOfActiveContact(List<Id> accIDs) {
    
            List<Account> acc = [Select Id,Name,(Select Id,Name,Active_Status__c FROM Contacts WHERE Active_Status__c = true)FROM Account WHERE Id IN: accIDs];
    
            if(acc!=null){
    
            for(Account accValue:acc){
    
                accValue.Number_of_active_contacts__c = accValue.Contacts.size();
    
                system.debug(accValue.Contacts);
    
            }
    
            }
    
            if(!acc.isempty()){
    
            update acc;
    
            }
    
        }
    
    }