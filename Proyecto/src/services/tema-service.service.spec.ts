import { TestBed } from '@angular/core/testing';

import { TemaServiceService } from './tema-service.service';

describe('TemaServiceService', () => {
  let service: TemaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
