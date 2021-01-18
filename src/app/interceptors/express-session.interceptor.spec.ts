import { TestBed } from '@angular/core/testing';

import { ExpressSessionInterceptor } from './express-session.interceptor';

describe('ExpressSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ExpressSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ExpressSessionInterceptor = TestBed.inject(ExpressSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
