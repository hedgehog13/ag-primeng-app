import { TestBed } from '@angular/core/testing';

import { DynemicTabService } from './dynemic-tab.service';

describe('DynemicTabService', () => {
  let service: DynemicTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynemicTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
