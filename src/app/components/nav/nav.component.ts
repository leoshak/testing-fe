import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLoggedIn = false;

  constructor(private httpService: HttpService, private tokenStorageService: TokenStorageService) { }
  
  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isLoggedIn();
  }

  logout(): void {
    this.tokenStorageService.signOut();

    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Accept": "application/json" })
    };

    this.httpService.logout(
      "http://127.0.0.1:8000/api/v1/authors/books",
      {},
      headers,
    ).subscribe(() => {
      window.location.replace("/books");
    });
  }
}
