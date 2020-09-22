import { TestBed } from '@angular/core/testing';

import { PushOneSignalService } from './push-one-signal.service';

describe('PushOneSignalService', () => {
  let service: PushOneSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushOneSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
