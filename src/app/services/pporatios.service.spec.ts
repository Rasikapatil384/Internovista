import { TestBed } from '@angular/core/testing';

import { PPOratiosService } from './pporatios.service';

describe('PPOratiosService', () => {
  let service: PPOratiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PPOratiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
