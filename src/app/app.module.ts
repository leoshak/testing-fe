import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookComponent } from './components/book/book.component';
import { ViewerPageComponent } from './components/viewer-page/viewer-page.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewerPageModule } from './components/viewer-page/viewer-page.module';

@NgModule({
  schemas: [ ],
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AuthorPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ViewerPageModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
