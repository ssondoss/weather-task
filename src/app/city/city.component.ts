import { Component, Input, OnInit } from '@angular/core';
import City from 'src/models/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  @Input() city: City;
  constructor() {
    // Just for initlization
    this.city = { name: '', tempC: 0, tempF: 0 };
  }

  ngOnInit(): void {}
}
