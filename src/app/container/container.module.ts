import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';
import { GraphComponent } from './graph/graph.component';



@NgModule({
  declarations: [
    ProfileComponent,
    RepoComponent,
    GraphComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContainerModule { }
