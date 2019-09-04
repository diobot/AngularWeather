import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import 'rxjs';

@Component({
  selector: 'app-weather-cast',
  templateUrl: './weather-cast.component.html',
  styleUrls: ['./weather-cast.component.css']
})
export class WeatherCastComponent implements OnInit {

  public cityCheck;
  public weatherCast;
  public weatherDetails = [];
  public classValue;
  public weatherValue = ['name', 'temp', 'weather', 'pressure'];
  public detailsBoolean = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { 

  }

findCity(value){
this.cityCheck = value;
this.weatherService.getWeather(this.cityCheck).subscribe(data => {
  this.weatherCast = data;
  this.weatherDetails = [this.weatherCast.name, this.weatherCast.main.temp.toFixed(0) + ' °C', this.weatherCast.weather[0].main, this.weatherCast.main.pressure + ' hPa'];
  console.log(data);
  this.detailsBoolean = false;
});
}
showDetails(event){
this.classValue = event.toElement.classList[1];

  console.log(this.classValue);
}

}
