import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeHandler()
    {
        const myEvent= new CustomEvent('close', {
            bubbles:true,
            detail : {
                msg : "dialogue box executed sucessfully" }
        })
        this.dispatchEvent(myEvent)
    }

    footerHandler()
    {
        console.log('Footer event executed')
    }
}