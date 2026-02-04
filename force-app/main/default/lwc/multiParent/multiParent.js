import { LightningElement, track } from 'lwc';

export default class MultiParent extends LightningElement {

    message = 'Abhishek Dubey';
    @track userData = { name: 'John Doe', email: 'john@example.com' };
    @track productData = { name: 'Product X', price: '$100' };
    
}

/*
Child - multiChild
Parent - multiParent

Best Part is, you're just sending the data from P2C, without any action on Parent.
*/