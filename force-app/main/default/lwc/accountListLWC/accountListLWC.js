import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
  
export default class AccountListLWC extends LightningElement {
    @wire(getAccountList) accounts;

    /*@wire(getAccountList) 
    wiredAccounts ({ error, data }) {
        if (data) {
            this.lstaccounts = data; 
       } else if (error) { 
           this.error = error;  
      }   }*/
}