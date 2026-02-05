import { LightningElement } from 'lwc';

export default class ReactiveParent extends LightningElement {

    age = 0;
    
    handleAgeChange(event){
        this.age = event.target.value;
    }
    get doubleAge(){
        return this.age * 2;
    }
}

/*
child - reactiveChild
parent - reactiveParent
*/