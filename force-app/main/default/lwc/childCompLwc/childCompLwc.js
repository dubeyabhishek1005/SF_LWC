import { LightningElement, api, track} from 'lwc';

export default class ChildCompLwc extends LightningElement {

    @api familyName;
    @track newName;

    handleNewNameChange(event){
        this.newName = event.target.value;
    }
    updateName(){
        if(this.newName){
            const event = new CustomEvent('namechange',{
                detail: {name: this.newName}
            });
            this.dispatchEvent(event);
        }
    }
}

/*
Child - childCompLwc
Parent - parentCompLwc
GrandParent - grandParentCompLwc
*/