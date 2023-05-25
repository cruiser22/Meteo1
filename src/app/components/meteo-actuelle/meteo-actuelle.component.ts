import { Component, Input } from '@angular/core';
import { PrevisionMeteo } from 'src/app/models/meteo';

@Component({
  selector: 'app-meteo-actuelle',
  templateUrl: './meteo-actuelle.component.html',
  styleUrls: ['./meteo-actuelle.component.css']
})
export class MeteoActuelleComponent {
  @Input() PrevisionMeteo!: PrevisionMeteo;

  constructor() { }
}

