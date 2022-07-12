import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModel=false
    message
    clickHandler()
    {
        this.showModel=true
    }

    closedialogue(event)
    {
        this.message=event.detail.msg
        this.showModel=false
    }
}