import { LightningElement,track,api } from 'lwc';

export default class ChildCMP extends LightningElement {
    @track Message;
    
    @api
    changeMessage(strString) {
       this.Message = strString.toUpperCase();
    }
}