import { LightningElement, api } from 'lwc';

export default class ParentCompLwc extends LightningElement {

    @api familyName;

    handleChildNameChange(event){
        this.familyName = event.detail.name;
        const eventSend = new CustomEvent('familyupdate', {
            detail: { newName: this.familyName }
        });
        this.dispatchEvent(eventSend);
    }

}

/*
Child - childCompLwc
Parent - parentCompLwc
GrandParent - grandParentCompLwc
*/