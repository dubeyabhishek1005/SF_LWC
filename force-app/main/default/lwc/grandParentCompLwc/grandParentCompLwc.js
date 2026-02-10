import { LightningElement, track } from 'lwc';

export default class GrandParentCompLwc extends LightningElement {

    @track familyName = 'Dubey';

    handleNameChange(event){
        this.familyName = event.detail.value;
    }
    handleFamilyUpdate(event){
        this.familyName = event.detail.newName;
    }
}

/*
Child - childCompLwc
Parent - parentCompLwc
GrandParent - grandParentCompLwc
*/