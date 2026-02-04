import { LightningElement } from 'lwc';

export default class DataSender extends LightningElement {

    formData = { name: '', email: '' };

    handleEmailChange(event){
        this.formData.email = event.target.value;
    }
    handleNameChange(event){
        this.formData.name = event.target.value;
    }
    sendData(){
        const event = new CustomEvent('datasent', {
            detail: this.formData
        });
        this.dispatchEvent(event);
    }
}

/*
Child - dataSender
Parent - dataReceiver
*/