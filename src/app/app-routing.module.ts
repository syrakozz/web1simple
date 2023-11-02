import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AboutpageComponent} from "./aboutpage/aboutpage.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"about",component:AboutpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
