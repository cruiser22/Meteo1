import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeolocalisationService {


  getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise ((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            resolve(position);
          },
      (error: GeolocationPositionError) => {
        reject(error);
      }
    );

  } else {
    reject('La géolocalisation n\'est pas prise en charge par votre navigateur');
  }
    });
  }

  test() {
    console.log("coucou")
  }
}
