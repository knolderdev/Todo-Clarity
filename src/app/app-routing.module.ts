import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WrapperComponent} from "./layout/wrapper/wrapper.component";
import {HomeComponent} from "./layout/home/home.component";
import {WhatsappComponent} from "./layout/home/whatsapp/whatsapp.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'whatsapp',
        component: WhatsappComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
