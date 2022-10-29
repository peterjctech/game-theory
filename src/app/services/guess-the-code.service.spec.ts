import { TestBed } from '@angular/core/testing';

import { GuessTheCodeService } from './guess-the-code.service';

describe('GuessTheCodeService', () => {
  let service: GuessTheCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessTheCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
