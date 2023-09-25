import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { TeamsComponent } from './teams/teams.component';
import { LandingComponent } from './landing/landing.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [{ path: '', component: MainComponent, children: [
  { path: '', component: LandingComponent},
  {path:'teams', component: TeamsComponent },
  {path:'email', component: EmailComponent}
]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
