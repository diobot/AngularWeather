import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherCastComponent } from './weather-cast/weather-cast.component';
import { WeatherThreeDaysComponent } from './weather-three-days/weather-three-days.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'weather', component: WeatherCastComponent},
  { path: 'weather-3days', component: WeatherThreeDaysComponent},
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WeatherCastComponent, WeatherThreeDaysComponent, SettingsComponent]