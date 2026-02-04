import { LightningElement } from 'lwc';

export default class ForEach2 extends LightningElement {

    items = [
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
            quantity: 2}
    ];
}