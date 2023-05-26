import { Component, OnInit } from '@angular/core';
import { ServiceMeteoService } from '../../services/service-meteo.service';
import { ServiceGeolocalisationService } from 'src/app/services/service-geolocalisation.service';
import { Root, Daily } from '../../models/meteo';

@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.component.html',
  styleUrls: ['./previsions.component.css']
})
export class PrevisionsComponent implements OnInit {

  currentPosition:GeolocationPosition = {} as GeolocationPosition;
  previsions: Daily[] = [];

  constructor(
    private meteoService: ServiceMeteoService,
    private localisationService: ServiceGeolocalisationService
    ) { }


  ngOnInit(): void {
    this.localisationService.getCurrentPosition();
    this.localisationService.getCurrentPositionObservable().subscribe(
      (position: GeolocationPosition) => {
        this.currentPosition=position;
        this.getPrevisionsMeteoWithLocation();
      },
      (error: GeolocationPositionError) => {
        console.error('Error getting current position:', error)
      }
    );
  }

getPrevisionsMeteoWithLocation():void {
  const latitude = this.currentPosition.coords.latitude;
  const longitude = this.currentPosition.coords.longitude;

    this.meteoService.getPrevisionsMeteo(latitude,longitude).subscribe((data: Root) => {
      const dailyData: Daily[] = [];
      for (let i = 0; i < data.daily.time.length; i++) {
        const daily: Daily = {
          time: [data.daily.time[i]],
          sunrise: [data.daily.sunrise[i]],
          sunset: [data.daily.sunset[i]],
          uv_index_max: [data.daily.uv_index_max[i]],
          uv_index_clear_sky_max: [data.daily.uv_index_clear_sky_max[i]]
        };
        dailyData.push(daily);
      }
      this.previsions = dailyData;
    },
    (error: any) => {
      console.error('Error getting weather forecast:', error);
    }
    );
  }

  // getLocation(): Promise <{ latitude:number, longitude: number }>{
  //   return new Promise<{ latitude: number, longitude: number}>((resolve, reject) => {
  // }

  //   this.localisationService.getCurrentPosition()
  //   .then((position: GeolocationPosition) => {
  //     // Utilisez la positions pour effectuer des opérations
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     resolve({ latitude, longitude});
  //   })

  //   .catch((error:any) => {
  //     // Gestion des erreurs liées à la géolocalisation
  //     console.error('Erreur de géolocalisation', error);
  //   });
  // }};
}
