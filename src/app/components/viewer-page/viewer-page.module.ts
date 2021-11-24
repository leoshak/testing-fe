import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerPageComponent } from './viewer-page.component';
import { BookComponent } from '../book/book.component';



@NgModule({
  declarations: [
    ViewerPageComponent,
    BookComponent,
  ],
  exports: [
    ViewerPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewerPageModule { }
