import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';
import { FooterComponent } from 'src/app/shared/component/footer/footer.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
