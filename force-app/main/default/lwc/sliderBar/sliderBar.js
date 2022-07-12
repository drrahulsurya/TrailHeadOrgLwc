import { LightningElement, api } from 'lwc';

export default class SliderBar extends LightningElement {
    val=50
    changeHandler(event)
    {
        this.val=event.target.value
    }

    @api resetSlider()
    {
        this.val=50
    }
}