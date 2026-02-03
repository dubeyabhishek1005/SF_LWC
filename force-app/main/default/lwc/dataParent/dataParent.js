import { LightningElement, track } from 'lwc';

export default class DataParent extends LightningElement {

    @track userName;
    handleNameChange(event){
        this.userName = event.target.value;
    }
}