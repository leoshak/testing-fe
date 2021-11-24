import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

interface BookInterface {
  title?: string,
  description?: string,
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor() {
    this.book = {} as Book;
  }

  ngOnInit(): void {
  }

}