import { LightningElement,wire,track } from 'lwc';
import { subscribe,unsubscribe, MessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/MyMessageChannel__c";

export default class IMCSubscriber extends LightningElement {
    subscription = null;
    @track receivedMessage = '';

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.handleSubscribe();
    }
    renderedCallback(){
            this.handleSubscribe();   
    }

    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, SAMPLEMC, (message) => {
            this.receivedMessage=JSON.stringify(message, null, '\t');
        });
    }
    
    disconnectedCallback(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}


