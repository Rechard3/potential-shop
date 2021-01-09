import { TestBed } from '@angular/core/testing';

import { FieldFactoryService } from './field-factory.service';

describe('FieldFactoryService', () => {
  let service: FieldFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
