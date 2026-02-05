import { LightningElement, track } from 'lwc';

export default class DynamicCssCmp extends LightningElement {

    @track tasks = [
        { id: 1, name: 'High Priority Task', priority: 'High', cssClass: 'slds-box slds- m-bottom_small slds-theme_error' },
        { id: 2, name: 'Medium Priority Task', priority: 'Medium', cssClass: 'slds-box slds-m-bottom_small slds-theme_warning' },
        { id: 3, name: 'Low Priority Task', priority: 'Low', cssClass:'slds-box slds- m-bottom_small slds-theme_success' }
    ];
}