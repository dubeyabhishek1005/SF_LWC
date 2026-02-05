import { LightningElement, api } from 'lwc';

export default class ReactiveChild extends LightningElement {

    @api counterAge = 0;
    
    get showEvenAge(){
        if (this.counterAge === 0){
            return false;
        }
        return this.counterAge %2 === 0;
    }

}


/*
child - reactiveChild
parent - reactiveParent
*/