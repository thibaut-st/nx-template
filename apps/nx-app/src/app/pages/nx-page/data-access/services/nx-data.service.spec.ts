import { TestBed } from '@angular/core/testing';

import { NxDataService } from './nx-data.service';

describe('NxDataService', () => {
  let service: NxDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
