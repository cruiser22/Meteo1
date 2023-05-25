import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoActuelleComponent } from './components/meteo-actuelle/meteo-actuelle.component';
import { PrevisionsComponent } from './components/previsions/previsions.component';
import { LocalisationComponent } from './components/localisation/localisation.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoActuelleComponent,
    PrevisionsComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
