import { TestBed } from '@angular/core/testing';

import { ProductByIdResolver } from './product-by-id.resolver';

describe('ProductByIdResolver', () => {
  let resolver: ProductByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
