import { TestBed } from '@angular/core/testing';

import { KandidatenService } from './kandidaten.service';

describe('KandidatenService', () => {
  let service: KandidatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KandidatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
