# WeatherTask

## Project Description

This application used to represent the weather temperature for all the 12 main cities of Jordan in Celsius° and Fahrenheit°.

Temperature data will be fetched from https://www.weatherapi.com/ via there APIs.

Data will also be cashed in localStorage in case of failure of API request, system will represent last updated valus from API before failure, In case the request failed in getting data from the first time the localStorage will be empty so the value of temperatures will be represented in their default value which is 0 .

The "Sunny" icon will be shown for temperature >= 33.5 C° and "Sun with Cloud" icon will be shown for temperature < 33.5 C° - The icons don't show the real state of weather just used to show different icons for now -.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
