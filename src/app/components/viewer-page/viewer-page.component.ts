import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Book } from 'src/app/models/book.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-viewer-page',
  templateUrl: './viewer-page.component.html',
  styleUrls: ['./viewer-page.component.scss']
})
export class ViewerPageComponent implements OnInit {

  public response: ApiResponse = new ApiResponse();
  books: Book[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllBook("http://127.0.0.1:8000/api/v1/books").subscribe(response => {
      this.response = response;
      this.books = response.data ?? [];
    });
  }

}
