import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {

    message;
    handleClick(event){
        this.message = (event.detail) ? event.detail : null;
    }
}

/*
ChildCmp - eventChild
ParentCmp - eventParent
*/