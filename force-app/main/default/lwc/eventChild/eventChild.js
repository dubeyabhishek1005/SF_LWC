import { LightningElement, track} from 'lwc';

export default class EventChild extends LightningElement {

    @track objData = 'Abhishek';

    handleClick(){
        const event = new CustomEvent('buttonclick', {
            detail: this.objData,
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}

/*
ChildCmp - eventChild
ParentCmp - eventParent

A. Bubble - False (By default)
when you dispatch an event from Child LWC, it can only be caught by the Parent LWC
that holds the Child LWC. If you want to catch the event from a GrandParent LWC, 
you need to set the bubbles property to true.

Behavior: The event stops immediately after the parent hears it. 
It does not travel up to a Grandparent or a container.

Shadow DOM: The event cannot cross the "Shadow Boundary" of the component.

B. Bubble - True
Used when a deeply nested component needs to talk to a container higher up. 
If you want an event to skip the immediate parent and be caught by a Grandparent (or any ancestor), 
you must configure two properties: bubbles and composed.

bubbles: true: Allows the event to move up the DOM tree within the component's internal template.
composed: true: Allows the event to break out of the Child's Shadow DOM and continue bubbling up through the Parent, Grandparent, etc.
*/