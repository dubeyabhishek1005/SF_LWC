import { LightningElement, track } from 'lwc';

export default class ValidationChild extends LightningElement {

    @track age;
    @track email;

    handleAgeChange(event){
        this.age = event.target.value;
    }
    handleEmailChange(event){
        this.email = event.target.value;
    }
    validateAndSubmit(){
        if(this.age < 18){
            const event = new CustomEvent('validationerror', {
                detail: { message: 'Age must be 18 years or older' }
            });
            this.dispatchEvent(event);
            return;
        } 
        if (!this.email.includes('@')){
            const event = new CustomEvent('validationerror', {
                detail: { message: 'Invalid Email!' }
            });
            this.dispatchEvent(event);
            return;
        }
        const event = new CustomEvent('datavalid', {
            detail: { age: this.age, email: this.email }
        });
        this.dispatchEvent(event);
        return;
    }
}

/*
child - validationChild
parent - validationParent
*/