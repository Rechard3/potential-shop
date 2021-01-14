import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../core/api';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /** register a new user */
  registerUser(user: User){
    return this.http.post(Api.authSignup, user);
  }
}
