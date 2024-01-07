import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  private isAnimating: boolean = false;
  isHungarianWeather: boolean = false;

  constructor(private LS: LanguageService) { }

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
        this.isHungarianWeather = isHungarian;
      });
  }

  private handleAnimationEnd() {
    this.isAnimating = false;
  }

  handleHover(bg: string) {
    if (!this.isAnimating) {
      this.isAnimating = true;

      const background = document.querySelector(`${bg}`);
      const weatherContainer = document.querySelector('.weather-container');

      if (weatherContainer && !weatherContainer.classList.contains('hide')) {
        weatherContainer.classList.add('hide');
        weatherContainer.classList.remove('show');
      }

      if (background && !background.classList.contains('show')) {
        background.classList.add('show');
        background.classList.remove('hide');

        background.addEventListener('animationend', () => {
          this.handleAnimationEnd();
        });
      } else {
        this.handleAnimationEnd();
      }
    }
  }

  handleHoverExit(bg: string) {
    if (!this.isAnimating) {
      this.isAnimating = true;

      const background = document.querySelector(`${bg}`);
      const weatherContainer = document.querySelector('.weather-container');

      if (weatherContainer && !weatherContainer.classList.contains('show')) {
        weatherContainer.classList.add('show');
        weatherContainer.classList.remove('hide');
      }

      if (background && !background.classList.contains('hide')) {
        background.classList.add('hide');
        background.classList.remove('show');

        background.addEventListener('animationend', () => {
          this.handleAnimationEnd();
        });
      } else {
        this.handleAnimationEnd();
      }
    }
  }
}
