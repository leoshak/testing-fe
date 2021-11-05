import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewerPageComponent } from './components/viewer-page/viewer-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: ViewerPageComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'authors/add/book', component: AuthorPageComponent },
  { path: 'authors/login', component: LoginComponent },
  { path: 'authors/register', component: RegisterComponent },
  { path: 'author/dashboard', component: AuthorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
