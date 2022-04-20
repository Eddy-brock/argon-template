import { TestBed } from '@angular/core/testing';

import { EnterpriseCashService } from './enterprise-cash.service';

describe('EnterpriseCashService', () => {
  let service: EnterpriseCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterpriseCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
