import { Component, Input, OnInit } from '@angular/core';

interface Document {
  title: string;
  content: string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  receivedDocument!: any
 

  // @Input() receivedDocument!: Document | null 

  ngOnInit(): void {
 this.receivedDocument = localStorage.getItem('document')
  
    console.log(this.receivedDocument)
    
  }

  

}
