import { TestBed } from '@angular/core/testing';

import { ServiceGeolocalisationService } from './service-geolocalisation.service';

describe('ServiceGeolocalisationService', () => {
  let service: ServiceGeolocalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGeolocalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
