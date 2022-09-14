import { LightningElement } from 'lwc';

export default class ParentCMP extends LightningElement {
    handleChangeEvent(event){
        this.template.querySelector('c-child-c-m-p').changeMessage(event.target.value);
    }
}