import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoActuelleComponent } from './components/meteo-actuelle/meteo-actuelle.component';
import { PrevisionsComponent } from './components/previsions/previsions.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RechercheComponent } from './components/recherche/recherche.component'

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
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
