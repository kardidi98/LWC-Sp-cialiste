import { LightningElement,api, track } from 'lwc';

export default class TrackProperty extends LightningElement {
      greeting = 'World';
      
      changeHandler(event) {
        this.greeting = event.target.value;
      }
    

}