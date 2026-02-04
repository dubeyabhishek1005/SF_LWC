import { LightningElement, track } from 'lwc';

export default class DataReceiver extends LightningElement {

    @track email;
    @track name;
    
    receiveData(event){
        this.email = event.detail.email;
        this.name = event.detail.name;
    }
}

/*
Child - dataSender
Parent - dataReceiver
*/