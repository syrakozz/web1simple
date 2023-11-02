import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '@marcreichel/angular-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    CarouselModule,
    BodyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
