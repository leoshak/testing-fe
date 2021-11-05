import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private httpService: HttpService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorage.isLoggedIn();
  }

  onSubmit(): void {
    const { email, password } = this.form;

    const payload = {
      email, 
      password
    }
    
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Accept": "application/json" })
    };

    this.httpService.authenticate("http://127.0.0.1:8000/api/v1/login", payload, headers).subscribe(
      data => {
        if (data.error) {
          this.errorMessage = data.message;
          this.isLoginFailed = true;
          return;
        }

        this.tokenStorage.saveToken(data.access_token);
        const userData = {
          "message": data.message,
          "error": data.error,
          "access_token": data.access_token,
        };
        this.tokenStorage.saveUser(userData);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.replace("/books");
    // window.location.reload();
  }
}
