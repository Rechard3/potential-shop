import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthActions } from 'src/app/auth/store/auth.actions';
import { AppRequest } from './app-request';
import { AppResponse, ResponseCodes } from './app-response';

export type RequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

/**
 * handles sending/receiving requests from the backend
 */
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient, private store: Store) {}

  private createRequest(method: RequestMethod) {
    const request = new AppRequest().method(method);
    request['dispatch'] = () => this.dispatch(request);
    return request;
  }

  /** dispatches an app-request */
  private dispatch(request: AppRequest): Observable<any> {
    return this.http
      .request<HttpResponse<any>>(request._method, request._target, {
        body: request._payload,
        responseType: 'json',
        observe: 'response',
      })
      .pipe(
        tap(resp=>{
          const cookie = resp.headers.get("Set-Cookie");
          if(cookie){
            document.cookie = cookie;
          }
        }),
        map((resp) => {
          const response = new AppResponse(resp);
          if (response.errors) {
            throwError(response);
          }
          return response;
        }),
        catchError((err) => {
          if (err.status == ResponseCodes.UNAUTHORIZED) {
            this.store.dispatch(new Navigate(["/", "auth", "login"]));
          }
          return EMPTY;
        })
      );
  }

  post(url: string) {
    return this.createRequest('POST').target(url);
  }

  get(url: string) {
    return this.createRequest('GET').target(url);
  }
}
