import { LightningElement } from 'lwc';

export default class SlotChild extends LightningElement {
    handleFooteChange()
    {
        const footerElement=this.template.querySelector('.slds-card__footer')
        if(footerElement)
        {
            footerElement.classList.remove('slds-hide')
        }
    }
}