import { LightningElement, track } from 'lwc';

export default class ValidationParent extends LightningElement {

    @track age;
    @track email;
    @track errorData;

    handleError(event){
        this.errorData = event.detail.message;
        this.age = null;
    }
    handleSuccess(event){
        this.age = event.detail.age;
        this.email = event.detail.email;
        this.errorData = null;
    }
}


/*
child - validationChild
parent - validationParent
*/