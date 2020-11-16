import { TestBed } from '@angular/core/testing';

import { WeedserviceService } from './weedservice.service';

describe('WeedserviceService', () => {
  let service: WeedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
