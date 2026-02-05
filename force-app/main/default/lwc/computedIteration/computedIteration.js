import { LightningElement } from 'lwc';

export default class ComputedIteration extends LightningElement {

    items = [
        { id: 1, name: 'Item A', price: 50 },
        { id: 2, name: 'Item B', price: 150 },
        { id: 3, name: 'Item C', price: 75 },
        { id: 4, name: 'Item D', price: 200 }
    ];
    expensive = false;

    toggleItem(){
        this.expensive = !this.expensive;
    }
    get filteredItems(){
        if(this.expensive === false){
            return this.items;
        }
        return this.items.filter(item => item.price > 100);
    }
}