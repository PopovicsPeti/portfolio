import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  isHungarianWeather: boolean = false;
  state = 'in';
  container = 'weather';

  constructor(private LS: LanguageService) {}

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
      this.isHungarianWeather = isHungarian;
    });
  }

  handleHover(container: string) {
    this.container = container;
  }

  handleHoverExit() {
    this.container = 'weather';
  }
}
