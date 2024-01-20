import { LanguageService } from 'src/app/language.service';

import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  animations: [
    trigger('en', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }), //apply default styles before animation starts
        animate(
          '1s ease-in-out',
          style({ transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }), //apply default styles before animation starts
        animate(
          '1s ease-in-out',
          style({ transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
    trigger('hu', [
      transition(':leave', [
        style({ transform: 'translateX(-100%)' }), //apply default styles before animation starts
        animate(
          '1s ease-in-out',
          style({ transform: 'translateX(0)' })
        ),
      ]),
      transition(':enter', [
        style({ transform: 'translateX(0)' }), //apply default styles before animation starts
        animate(
          '1s ease-in-out',
          style({ transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class CvComponent implements OnInit {
  public isHungarianCv$ = new BehaviorSubject(false);
  public breakpointChange$!: Observable<string>;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'xsmall'],
    [Breakpoints.Small, 'small'],
    [Breakpoints.Medium, 'medium'],
    [Breakpoints.Large, 'large'],
    [Breakpoints.XLarge, 'xlarge'],
  ]);

  constructor(
    private languageService: LanguageService,
    breakpointObserver: BreakpointObserver
  ) {
    this.breakpointChange$ = breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => {
          let classValue = '';
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              classValue = this.displayNameMap.get(query) ?? 'Unknown';
            }
          }
          console.log(classValue);
          return classValue;
        })
      );
  }

  public ngOnInit(): void {
    this.languageService.isHungarianLanguage$.subscribe((value) => {
      this.isHungarianCv$.next(value);
    });
  }

  public showEducation() {
    let experienceBtn = document.getElementById('experience-btn');
    let experienceHtml = document.getElementById('experiance');
    let educationBtn = document.getElementById('education-btn');
    let educationHtml = document.getElementById('education');

    experienceHtml?.classList.add('hide');
    experienceBtn?.classList.remove('active');
    educationBtn?.classList.add('active');
    educationHtml?.classList.remove('hide');
  }

  public showEducationHun() {
    let experienceBtn = document.getElementById('experience-btn-hun');
    let experienceHtml = document.getElementById('experience-hun');
    let educationBtn = document.getElementById('education-btn-hun');
    let educationHtml = document.getElementById('education-hun');

    experienceHtml?.classList.add('hide');
    experienceBtn?.classList.remove('active');
    educationBtn?.classList.add('active');
    educationHtml?.classList.remove('hide');
  }

  public showExperience() {
    let experienceBtn = document.getElementById('experience-btn');
    let experienceHtml = document.getElementById('experiance');
    let educationBtn = document.getElementById('education-btn');
    let educationHtml = document.getElementById('education');

    experienceHtml?.classList.remove('hide');
    experienceBtn?.classList.add('active');
    educationBtn?.classList.remove('active');
    educationHtml?.classList.add('hide');
  }

  public showExperienceHun() {
    let experienceBtn = document.getElementById('experience-btn-hun');
    let experienceHtml = document.getElementById('experience-hun');
    let educationBtn = document.getElementById('education-btn-hun');
    let educationHtml = document.getElementById('education-hun');

    experienceHtml?.classList.remove('hide');
    experienceBtn?.classList.add('active');
    educationBtn?.classList.remove('active');
    educationHtml?.classList.add('hide');
  }

  public showHungaryan() {
    this.languageService.toggleLanguage();
  }

  public toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}

