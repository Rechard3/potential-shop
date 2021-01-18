import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppResponse } from './app-response';

/** represents a request to be made to the backend */
export class AppRequest {
  /**
   *
   */
  constructor() {}

  _payload: any;
  _target: string;
  _method: string;

  /** set the end-point where the request will be sent */
  target(url: string) {
    this._target = url;
    return this;
  }

  /** set the payload ("body") of the request */
  payload(payload: any) {
    this._payload = payload;
    return this;
  }

  /** set the method of the request */
  method(method: string) {
    this._method = method;
    return this;
  }

  dispatch: () => Observable<AppResponse> = () => {
    console.error(
      `dispatch was called improperly.
      Please use the request service from core package`
    );
    return EMPTY;
  };
}
