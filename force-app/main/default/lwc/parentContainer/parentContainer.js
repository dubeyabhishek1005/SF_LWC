import { LightningElement, track } from 'lwc';

export default class ParentContainer extends LightningElement {

    @track message;
    handleClick(event){
        this.message = event.detail;
    }
}