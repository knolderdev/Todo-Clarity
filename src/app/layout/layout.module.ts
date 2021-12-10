import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {ClrVerticalNavModule} from "@clr/angular";
import { HomeComponent } from './home/home.component';
import { WhatsappComponent } from './home/whatsapp/whatsapp.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    HomeComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    ClrVerticalNavModule,
    RouterModule
  ]
})
export class LayoutModule { }
