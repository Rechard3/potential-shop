import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../core/api';
import { RequestService } from '../core/utils/request.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private request: RequestService) { }

  /** register a new user */
  registerUser(user: User){
    return this.http.post(Api.authSignup, user);
  }

  /** authenticate the user with credentials */
  authenticate(creds: {username: string, password: string}){
    return this.request.post(Api.authLogin).payload(creds).dispatch();
  }
}
