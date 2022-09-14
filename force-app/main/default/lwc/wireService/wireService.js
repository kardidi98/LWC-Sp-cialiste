import { LightningElement,wire,api } from 'lwc';
    /** 1-To import a reference to an object, use this syntax.
    import objectName from '@salesforce/schema/object';*/
    //import PROPERTY_OBJECT from '@salesforce/schema/Property__c';
    import ACCOUNT_OBJECT from '@salesforce/schema/Account';
    /**2-To import a reference to a field, use this syntax.
    import FIELD_NAME from '@salesforce/schema/object.field';**/
    //import POSITION_LEVEL_FIELD from '@salesforce/schema/Property__c.Name';
    import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

    /**3. To import a reference to a field via a relationship, use this syntax.
    import SPANNING_FIELD_NAME from '@salesforce/schema/object.relationship.field';*/
    import ACCOUNT_OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

    import { getRecord } from 'lightning/uiRecordApi';

    export default class WireService extends LightningElement {
        @api recordId;

        @wire(getRecord, { recordId: '$recordId', fields: ['Opportunity.Name'] })
        record;


    
    }