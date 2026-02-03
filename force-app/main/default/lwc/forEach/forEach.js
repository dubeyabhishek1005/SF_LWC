import { LightningElement, track } from 'lwc';

export default class ForEach extends LightningElement {

    @track products = [
        {
            Id: 1,
            name: 'Product 1',
            price: 100,
            quantity: 1
        },
        {
            Id: 2,
            name: 'Product 2',
            price: 200,
            quantity: 2
        },
        {
            Id: 3,
            name: 'Product 3',
            price: 300,
            quantity: 3
        }
    ];

    connectedCallback(){
        this.calulateTotal();
    }

    calulateTotal(){
        this.products.forEach(product => {
            product.total = product.price * product.quantity;
        });
    }

}