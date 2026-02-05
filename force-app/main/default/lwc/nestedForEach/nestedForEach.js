import { LightningElement, track } from 'lwc';

export default class NestedForEach extends LightningElement {

    @track categories = [
        {
            id: 1,
            name: 'Electronics', 
            products: [
                { id: 1, name: 'Laptop', price: 65000 },
                { id: 2, name: 'Phone', price: 55000 }
            ]
        },
        {
            id: 2,
            name: 'Books', 
            products: [
                { id: 3, name: 'Novel', price: 1000 },
                { id: 4, name: 'Textbook', price: 800 }
            ]
        }
    ];
}