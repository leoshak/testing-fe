import { Component, Input, OnInit } from '@angular/core';

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

  @Input() book: BookInterface;

  constructor() {
    this.book = {} as BookInterface;
  }

  ngOnInit(): void {
  }

}