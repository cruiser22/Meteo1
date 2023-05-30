import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/meteo';
import { ServiceMeteoService } from 'src/app/services/service-meteo.service';

@Component({
  selector: 'app-meteo-actuelle',
  templateUrl: './meteo-actuelle.component.html',
  styleUrls: ['./meteo-actuelle.component.css']
})
export class MeteoActuelleComponent implements OnInit {

  public currentWeather!:CurrentWeather;

  constructor(private meteoService:ServiceMeteoService){}

    ngOnInit(): void {
      console.warn(this.meteoService.getPrevisionsMeteo(50,50));
      this.meteoService.getPrevisionsMeteo(50,50).subscribe(res => {
        console.warn(res)
      });
  }
}
