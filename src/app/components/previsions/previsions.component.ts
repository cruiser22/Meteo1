import { Component, OnInit } from '@angular/core';
import { ServiceMeteoService } from '../../services/service-meteo.service';
import { Root, Daily } from '../../models/meteo';

@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.component.html',
  styleUrls: ['./previsions.component.css']
})
export class PrevisionsComponent implements OnInit {
  previsions: Daily[] = [];

  constructor(private meteoService: ServiceMeteoService) { }

  ngOnInit(): void {
    this.meteoService.getPrevisionsMeteo(9,3.057256).subscribe((data: Root) => {
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
    });
  }
}
