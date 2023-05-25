import { Component, OnInit } from '@angular/core';
import { ServiceGeolocalisationService } from 'src/app/services/service-geolocalisation.service';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})

export class LocalisationComponent implements OnInit{
  constructor(
    private ServiceGeolocalisationService: ServiceGeolocalisationService
    ){}

  // getLocation(): void {
  ngOnInit(): void {

    this.ServiceGeolocalisationService.getCurrentPosition()
    .then((position: GeolocationPosition) => {
      // Utilisez la positions pour effectuer des opérations
      const latitude = position.coords.longitude;
      const longitude = position.coords.longitude;
      console.log('Latitude', latitude);
      console.log('Longitude', longitude);
    })

    .catch((error:any) => {
      // Gestion des erreurs liées à la géolocalisation
      console.error('Erreur de géolocalisation', error);
    });
  }
}
