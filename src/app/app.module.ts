import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoActuelleComponent } from './components/meteo-actuelle/meteo-actuelle.component';
import { PrevisionsComponent } from './components/previsions/previsions.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RechercheComponent } from './components/recherche/recherche.component'
import { ServiceGeolocalisationService } from './services/service-geolocalisation.service';

@NgModule({
  declarations: [
    AppComponent,
    MeteoActuelleComponent,

    PrevisionsComponent,
    LocalisationComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [ServiceGeolocalisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
