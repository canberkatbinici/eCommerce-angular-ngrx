import { TestBed } from '@angular/core/testing';

import { CountryiesService } from './countryies.service';

describe('CountryiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryiesService = TestBed.get(CountryiesService);
    expect(service).toBeTruthy();
  });
});
