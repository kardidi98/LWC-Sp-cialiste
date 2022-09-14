import { LightningElement,api } from 'lwc';

export default class ChildComponentEvent extends LightningElement {
    @api progressValue;

    handleChnage(event) {
        this.progressValue = event.target.value;
        // Creates the event with the data.
        const selectedEvent = new CustomEvent("progressvaluechange", {
          detail: this.progressValue,
          bubbles: false , 
          composed : false 
        });
    
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
  }
}