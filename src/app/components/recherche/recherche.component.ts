import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {

  constructor(private http:HttpClient){}

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
