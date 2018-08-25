import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public login(email: string, password: string) {
    return this.http.post<LoginResponse>('/login', {
      email, password
    });
  }

  public signup(name: string, email: string, password: string, phoneNumber: string) {
    return this.http.post('/users', {
      name,
      email,
      password,
      phone_number: phoneNumber
    });
  }
}
