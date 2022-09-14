import { LightningElement,api } from 'lwc';

export default class ApiDecorator extends LightningElement {
    @api itemName;
}
