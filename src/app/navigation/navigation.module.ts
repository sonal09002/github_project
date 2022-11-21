import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MidNavComponent } from './mid-nav/mid-nav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MidNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
