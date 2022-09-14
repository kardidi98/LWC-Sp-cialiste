import { LightningElement,api } from 'lwc';

export default class FlowLWC extends LightningElement {
    @api strRecordId;
    
    arrayFields = ['Name', 'AccountNumber', 'Phone', 'Type', 'Website'];
}