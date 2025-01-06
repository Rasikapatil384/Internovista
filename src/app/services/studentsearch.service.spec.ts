import { TestBed } from '@angular/core/testing';

import { StudentsearchService } from './studentsearch.service';

describe('StudentsearchService', () => {
  let service: StudentsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
