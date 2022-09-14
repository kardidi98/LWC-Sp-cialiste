import { LightningElement ,api,track} from 'lwc';

export default class ParentCompentToEvent extends LightningElement {
    @track progressValue = 0;
    hanldeProgressValueChange(event) {
      this.progressValue = event.detail;
      event.detail.value
    }
} 







