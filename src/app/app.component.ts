import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-task';
  cities = [
    { name: 'Amman', tempC: 0, tempF: 0 },
    { name: 'Irbid', tempC: 0, tempF: 0 },
    { name: 'As Salt', tempC: 0, tempF: 0 },
    { name: 'Zarqa', tempC: 0, tempF: 0 },
    { name: 'Madaba', tempC: 0, tempF: 0 },
    { name: 'Jerash', tempC: 0, tempF: 0 },
    { name: 'Tafila', tempC: 0, tempF: 0 },
    { name: 'Al-Karak', tempC: 0, tempF: 0 },
    { name: 'Ajlun', tempC: 0, tempF: 0 },
    { name: 'Mafraq', tempC: 0, tempF: 0 },
    { name: 'Aqaba', tempC: 0, tempF: 0 },
    { name: 'Ma"an', tempC: 0, tempF: 0 },
  ];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    for (const city of this.cities) {
      this.http.get(environment.API + city.name).subscribe(
        (res: any) => {
          localStorage.setItem(city.name, res.current.temp_c + '');
          city.tempC = res.current.temp_c;
          city.tempF = res.current.temp_f;
        },
        (error) => {
          city.tempC = parseInt(localStorage.getItem(city.name) || '0');
        }
      );
    }
  }
}
