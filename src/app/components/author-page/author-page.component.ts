import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Book } from 'src/app/models/book.model';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {

  public books: Book[] = [];

  public isError: boolean = false;
  public errorMessage: string = "";

  constructor(private httpService: HttpService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    const headers = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        "Accept": "application/json",
        "Authorization": `Bearer ${this.tokenStorage.getToken()}`
      })
    };
    
    this.httpService.getAllBook(
        "http://127.0.0.1:8000/api/v1/authors/books",
        headers
      ).subscribe(response => {
      if (response.error) {
        this.isError = true;
        this.errorMessage = response.message;
      } else {
        this.books = response.data ?? [];
      }
    });
  }
}
