import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) {  }

  getWeather(city): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ac6c6075d5e794c18b1b66402ab3eb91&units=metric');
  }
}
