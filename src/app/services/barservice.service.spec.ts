import { TestBed } from '@angular/core/testing';

import { BarserviceService } from './barservice.service';

describe('BarserviceService', () => {
  let service: BarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
