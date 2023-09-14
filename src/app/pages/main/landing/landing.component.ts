import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

}
