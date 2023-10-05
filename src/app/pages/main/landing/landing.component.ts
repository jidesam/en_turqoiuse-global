import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare let Email: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

constructor(){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  email(){
    const emailAdress = 'info@en-turquoiseglobalservices.com'
    window.location.href =`mailto: ${emailAdress}`
  }

  sendMessage() {
      // const {email }= this.newsletterForm.value
      console.log("test")
        Email?.send({
          Host: "smtp.elasticemail.com",
          // port : "2525",
          Username: "test@en-turquoiseglobalservices.com",
          Password: "DAA91B70F71CC4CD612794C963DB1C23AFFD",
          To: "adroit819@gmail.com",
          From: 'test@en-turquoiseglobalservices.com',
          Subject: "Add me to your newsletter",
          Body: "Well that was easy!!"
        })
        .then( ()=> {
            // this.notification.publishMessages("Thank you for subscribing to our newsletter!", "")
            console.log("it works")
            // setTimeout(() => {
            //   // this.router.navigate(["/success"])
            // }, 2500);
          });  

      // console.log(this.newsletterForm)
  }
}
