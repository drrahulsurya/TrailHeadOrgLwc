import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    userNames=["ram","dinesh","prashant","akshit"];
    fetchDetailHandler()

    {
        const elem=this.template.querySelector('h1')
        elem.style.border="1px solid red"

        const elemArray=this.template.querySelectorAll('.name')
        console.log(elem.innerText)
        Array.from(elemArray).forEach(item=>{
                console.log(item.innerText)
        })
      
    }
}