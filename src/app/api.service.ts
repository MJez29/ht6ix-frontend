import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from './notes/notes';
import { NoteResponse } from './note/note';

interface LoginResponse {
  token: string;
};

interface SignupResponse {
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
    return this.http.post<SignupResponse>('/users', {
      name,
      email,
      password,
      phoneNumber: phoneNumber
    });
  }

  public getNotes() {
    return this.http.get<Notes>('/notes');
  }

  public getNote(id: string) {
    return this.http.get<NoteResponse>(`/notes/${id}`);
  }

  public createNote(body: string, date: string) {
    return this.http.post<NoteResponse>('/notes', {
      body, date
    });
  }

  public updateNote(id: string, body: string) {
    return this.http.put<NoteResponse>(`/notes/${id}`, {
      body
    });
  }
}
