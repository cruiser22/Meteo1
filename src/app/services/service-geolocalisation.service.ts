import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceGeolocalisationService {

  private currentPositionSubject: Subject<GeolocationPosition> = new Subject<GeolocationPosition>();

  getCurrentPosition(): void {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            this.currentPositionSubject.next(position);
          },
      (error: GeolocationPositionError) => {
        this.currentPositionSubject.error(error);
      });
    } else {
      this.currentPositionSubject.error(new Error('La géolocalisation n\'est pas prise en charge par votre navigateur'));
    }
  }

  getCurrentPositionObservable(): Observable<GeolocationPosition>{
    return this.currentPositionSubject.asObservable();
  }
}

