import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean;
  private token: string;

  constructor() { 
    const token = localStorage.getItem('token');
    
    if (token) {
      this.loggedIn = true;
      this.token = token;
    }
  }

  public setLoggedIn(token) {
    this.token = token;
    this.loggedIn = true;
    localStorage.setItem('token', token);
  }

  public setLoggedOut() {
    this.loggedIn = false;
    localStorage.removeItem('token');
  }

  public isLoggedIn() {
    return this.loggedIn;
  }

  public getToken() {
    return this.token;
  }
}
