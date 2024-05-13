import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


interface Document {
  title: string;
  content: string;
}

declare let Email: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Output() documentSelected = new EventEmitter<Document>();
  @Input() receivedDocument: Document | null = null

  documents: Document[] = [
    { title: 'Document 1', content: 'Content of document 1' },
    { title: 'Document 2', content: 'Content of document 2' },
    { title: 'Document 3', content: 'Content of document 3' }
  ];


constructor( private router : Router){

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


  selectedDocumentIndex: number = -1;
  selectedDocument: Document | null = null;

  selectDocument(index: number) {
    this.selectedDocumentIndex = index;
    this.selectedDocument = this.documents[index];
    localStorage.setItem("document", JSON.stringify(this.selectedDocument) )
  }

  onUploadDocumentClick() {
    
    if (this.selectedDocument) {
      this.router.navigateByUrl('teams')
      this.documentSelected.emit(this.selectedDocument);
    }
  }
}


