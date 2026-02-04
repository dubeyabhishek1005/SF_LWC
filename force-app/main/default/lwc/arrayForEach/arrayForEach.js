import { LightningElement, track} from 'lwc';

export default class ArrayForEach extends LightningElement {

@track displayItems = [];

   originalItems = [
    {Id: 1, name: 'Soap', value: 50},
    {Id: 2, name: 'Shampoo', value: 500},
    {Id: 3, name: 'Toothpaste', value: 100},
    {Id: 4, name: 'Toothbrush', value: 40},
    {Id: 5, name: 'Deodorant', value:200}
   ];

   connectedCallback(){
    // this is a spread syntax, used to create a copy of an array
    this.displayItems = [...this.originalItems]; 
   }

   sortItems(){
    this.displayItems = [...this.originalItems].sort((a,b) => a.value - b.value);
   }

   filterItems(){
    this.displayItems = [...this.originalItems].filter(item => item.value > 400);
   }

   resetItems(){
    this.displayItems = [...this.originalItems];
   }
}