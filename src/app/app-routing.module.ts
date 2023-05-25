import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { MeteoActuelleComponent } from './components/meteo-actuelle/meteo-actuelle.component';
import { PrevisionsComponent } from './components/previsions/previsions.component';

const routes: Routes = [
{path: 'localisation', component: LocalisationComponent},
{path: 'ok', component:MeteoActuelleComponent},
{path: 'ko', component: PrevisionsComponent},
{
    path:'local',
    component:LocalisationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
