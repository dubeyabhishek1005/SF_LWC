import { LightningElement, track } from 'lwc';

export default class ConditionalList extends LightningElement {

    @track items = [
        { id: 1, name: 'Item A', active: true, status: 'Active' },
        { id: 2, name: 'Item B', active: false, status: 'Inactive' },
        { id: 3, name: 'Item C', active: true, status: 'Active' },
        { id: 4, name: 'Item D', active: true, status: 'Pending' }
    ];
}