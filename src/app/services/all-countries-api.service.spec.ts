import { TestBed } from '@angular/core/testing';

import { AllCountriesApiService } from './all-countries-api.service';

describe('AllCountriesApiService', () => {
  let service: AllCountriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCountriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
