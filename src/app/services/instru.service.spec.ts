import { TestBed } from '@angular/core/testing';

import { InstruService } from './instru.service';

describe('InstruService', () => {
  let service: InstruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
