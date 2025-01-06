import { TestBed } from '@angular/core/testing';

import { EntcService } from './entc.service';

describe('EntcService', () => {
  let service: EntcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
