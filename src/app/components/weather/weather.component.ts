import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

const images = {
  default: '../../../assets/weather/weather-bg.jpeg',
  message: '../../../assets/weather/massage-weather-bg.jpg',
  space: '../../../assets/weather/rainy-weather-bg.jpg',
  cv: '../../../assets/weather/snow-weather-bg.jpg',
  motivation: '../../../assets/weather/wind-weather-bg.jpg',
};

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  imageURLs = images;
  isHungarianWeather: boolean = false;
  imageURL = images.default;
  state = 'in';

  constructor(private LS: LanguageService) {}

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
      this.isHungarianWeather = isHungarian;
    });
  }

  handleHover(url: string) {
    console.log('Not animating');
    this.imageURL = url;
  }

  handleHoverExit() {
    this.imageURL = this.imageURLs.default;
  }
}
