import { TestBed } from '@angular/core/testing';

import { MunicipyService } from './municipy.service';

describe('MunicipyService', () => {
  let service: MunicipyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
