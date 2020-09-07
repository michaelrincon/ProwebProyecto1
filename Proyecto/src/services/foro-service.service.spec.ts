import { TestBed } from '@angular/core/testing';

import { ForoServiceService } from './foro-service.service';

describe('ForoServiceService', () => {
  let service: ForoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
