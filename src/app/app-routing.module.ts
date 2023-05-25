import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { MeteoActuelleComponent } from './components/meteo-actuelle/meteo-actuelle.component';

const routes: Routes = [
{path: 'localisation', component: LocalisationComponent},
{path: 'ok', component:MeteoActuelleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
