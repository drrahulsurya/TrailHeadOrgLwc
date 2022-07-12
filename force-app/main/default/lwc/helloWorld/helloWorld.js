import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  constructor()
  {
    super()
    checkIsSuccess("success")
    function checkIsSuccess(data){
      const promise = new Promise((resolve, reject) =>{
        if(data==="success")
        {
          console.log("resolved successful")
          return resolve("promise resolved")
        }
        else{
          console.log("reject successful")
          return reject("promise rejected")
        }
      })
    }
  }

   changeHandler(event) {
    this.greeting = event.target.value;
  }

  

}