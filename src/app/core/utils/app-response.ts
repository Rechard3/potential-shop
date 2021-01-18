import { HttpResponse } from '@angular/common/http';

export class AppResponse {
  errors = null;
  data = null;

  constructor(private response: HttpResponse<any>) {
    if (response.status != ResponseCodes.OK) {
      this.errors = response.body['status'];
    }

    this.data = response.body['model'];
  }
}

export enum ResponseCodes {
  OK = 200,
  UNAUTHORIZED = 401,
}
