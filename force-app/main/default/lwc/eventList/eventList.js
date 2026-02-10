import { LightningElement, track } from 'lwc';

export default class EventList extends LightningElement {

    @track items = [
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
        { id: 3, name: 'Item C' }
    ];

    handleEdit(event){
        const id = event.currentTarget.dataset.id;
        console.log(id);
    }
    handleDelete(event){
        const id = parseInt(event.currentTarget.dataset.id);
        this.items = this.items.filter(item => item.id !== id);
        console.log(this.items);
    }
}

/*
In LWC, data-id (and any attribute starting with data-) is a standard HTML technique used to pass data from your HTML template to your JavaScript controller.
It is most commonly used inside loops (like for:each) to identify which specific item was clicked.

Why do we need it?
Imagine you have a list of 10 "Delete" buttons, one for each contact. All 10 buttons call the same function handleDelete.

Without data-id: The function knows a button was clicked, but not which contact to delete.
With data-id: You attach the specific Contact ID to the button. When clicked, the function reads that ID.

1. In HTML (data-id attribute)
You add data-id={variable} to your button. You can actually name it anything starting with data- (e.g., data-emp-code, data-index), but data-id is the convention for record IDs.

2. In JavaScript (dataset property)
In your handler function, you access the data using event.target.dataset.
data-id in HTML becomes dataset.id in JS.
data-user-name in HTML becomes dataset.userName (camelCase) in JS.

Critical Tip: target vs currentTarget
When using data- attributes, always prefer event.currentTarget.dataset.id.

target: Refers to the exact element that was clicked. If you have an icon inside a button, the target might be the icon (which doesn't have the data-id), causing your code to fail.
currentTarget: Refers to the element the listener is attached to (the <lightning-button>). This guarantees you always get the data-id, regardless of what part of the button was clicked.
*/