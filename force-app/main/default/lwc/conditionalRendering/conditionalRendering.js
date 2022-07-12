import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible=false;
    name
    
    handleClick()
        {
            this.isVisible=true
        }

        
        
        handleGet(event)
        {
            this.name=event.target.value
        }


    get helloMethod()
    {
       return this.name === 'hello'
    }
       
}