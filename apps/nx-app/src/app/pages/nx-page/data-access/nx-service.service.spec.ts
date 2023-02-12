import { TestBed } from '@angular/core/testing';

import { NxServiceService } from './nx-service.service';

describe('NxServiceService', () => {
  let service: NxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
