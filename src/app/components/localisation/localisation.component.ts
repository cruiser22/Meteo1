import { Component } from '@angular/core';
import { ServiceGeolocalisationService } from 'src/app/services/service-geolocalisation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})

export class LocalisationComponent{
  constructor(
    // private ServiceGeolocalisationService: ServiceGeolocalisationService,
            private http:HttpClient
    ){}

  // getLocation(): void {
  //   this.ServiceGeolocalisationService.getCurrentPosition()
  //   .then((position: GeolocationPosition) => {
  //     // Utilisez la positions pour effectuer des opérations
  //     const latitude = position.coords.longitude;
  //     const longitude = position.coords.longitude;
  //     console.log('Latitude', latitude);
  //     console.log('Longitude', longitude);

  //   })
  //   .catch((error:any) => {
  //     // Gestion des erreurs liées à la géolocalisation
  //     console.error('Erreur de géolocalisation', error);
  //   });

    // Selection des ville pour retour des coordonnées
    geolocateCity(city: string){
      const apiUrl = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`;

      this.http.get(apiUrl).subscribe((response: any) => {
        if (response && response.length > 0){
          const latitude = response[0].lat;
          const longitude = response[0].lon;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        }else{
          console.error('Geocoding failed');
        }
      });
    }
  }

// }
