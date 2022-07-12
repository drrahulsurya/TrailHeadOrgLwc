import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
carList=["Audi","i20","Thor","Creta","Ferrari"];

CeoList=[
    {
        id:1,
        company:"Google",
        name:"sundar pichai"
    },
    
    {
    id:2,
    company:"Apple INC",
    name:"Tim cook"
    },

    {
        id:3,
        company:"Facebook",
        name:"Mark Zukerberg"
    },

    {
        id:4,
        company:"Amazon",
        name:"Joff Bezos"
    },

]
}