import { api, LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import CONTACT_ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_OWNER from '@salesforce/schema/Account.OwnerId';

const fields = [CONTACT_ACCOUNT_ID];
export default class RecordForm extends LightningElement {
    @api
    recordId;

    //fields to show in account form
    selectedAccountFields = [ACCOUNT_NAME, ACCOUNT_TYPE, ACCOUNT_OWNER];

    //get current contact using LDS
    @wire(getRecord, {
        recordId: "$recordId",
        fields
      })
      contact;
    
    get accountId() {
        return getFieldValue(this.contact.data, CONTACT_ACCOUNT_ID);
    }
}