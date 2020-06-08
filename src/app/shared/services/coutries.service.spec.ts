import { TestBed } from '@angular/core/testing';

import { CoutriesService } from './coutries.service';

describe('CoutriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoutriesService = TestBed.get(CoutriesService);
    expect(service).toBeTruthy();
  });
});
