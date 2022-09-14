import { LightningElement,track ,wire} from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/MyMessageChannel__c";

export default class LMCWebComponentDemo extends LightningElement {
    @track myMessage = '';
        

    @wire(MessageContext)
    messageContext;


    handleChange(event) {
        this.myMessage = event.target.value;
    }

    publishMC() {
        console.log('my'+this.myMessage);
        const message = {
            messageToSend: this.myMessage,
            sourceSystem: "From LWC"
        };
        publish(this.messageContext, SAMPLEMC, message);
        console.log('sent');
    }

}