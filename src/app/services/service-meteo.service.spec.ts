import { TestBed } from '@angular/core/testing';

import { ServiceMeteoService } from './service-meteo.service';

describe('ServiceMeteoService', () => {
  let service: ServiceMeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
