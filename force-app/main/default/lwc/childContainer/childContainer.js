import { LightningElement } from 'lwc';

export default class ChildContainer extends LightningElement {

    handleChildClick(){
        const event = new CustomEvent('buttonclick', {
            detail: 'Button Clicked from Child'
        });
        this.dispatchEvent(event);
    }
}