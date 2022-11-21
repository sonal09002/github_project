import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { MidNavComponent } from './navigation/mid-nav/mid-nav.component';

import { NavComponent } from './base-nav/nav/nav.component';

import { FooterComponent } from './footer/footer/footer.component';
import { ProfileComponent } from '../../../git/src/app/container/profile/profile.component';
import { RepoComponent } from '../../src/app/container/repo/repo.component';
import { GraphComponent } from '../../src/app/container/graph/graph.component';
import { RepositoriesComponent } from '../../src/app/subpages/repositories/repositories.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MidNavComponent,
    NavComponent,
    FooterComponent,
    ProfileComponent,
    RepoComponent,
    GraphComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
