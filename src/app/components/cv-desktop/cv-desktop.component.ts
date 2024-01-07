import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-cv-desktop',
  templateUrl: './cv-desktop.component.html',
  styleUrls: ['./cv-desktop.component.scss']
})
export class CvDesktopComponent implements OnInit {
  switchToHun: boolean = true;
  isHungarianCv: boolean = false;

  constructor(private LS: LanguageService) { }

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
        this.isHungarianCv = isHungarian;
      });
  }

  showHungaryan() {
    this.LS.toggleLanguage();
  }


  toggleLanguage() {  // over 1200px
    this.LS.toggleLanguage();
    console.log(this.switchToHun)
    let engCV = document.getElementById('eng');
    let hunCV = document.getElementById('hun');

    if (engCV && hunCV) {
      if (this.switchToHun) {
        engCV.classList.remove('on-screen-eng');
        hunCV.classList.add('on-screen-hun');
      } else {
        engCV.classList.add('on-screen-eng');
        hunCV.classList.remove('on-screen-hun');
      }

      this.switchToHun = !this.switchToHun;
    }
  }

  showExperience(){
    let experienceBtn = document.getElementById('experience-btn');
    let experienceHtml = document.getElementById('experiance');
    let educationBtn = document.getElementById('education-btn');
    let educationHtml = document.getElementById('education');

    experienceHtml?.classList.remove('hide');
    experienceBtn?.classList.add('active');
    educationBtn?.classList.remove('active');
    educationHtml?.classList.add('hide');
  }

  showEducation() {
    let experienceBtn = document.getElementById('experience-btn');
    let experienceHtml = document.getElementById('experiance');
    let educationBtn = document.getElementById('education-btn');
    let educationHtml = document.getElementById('education');

    experienceHtml?.classList.add('hide');
    experienceBtn?.classList.remove('active');
    educationBtn?.classList.add('active');
    educationHtml?.classList.remove('hide');
  }

  showExperienceHun(){
    let experienceBtn = document.getElementById('experience-btn-hun');
    let experienceHtml = document.getElementById('experience-hun');
    let educationBtn = document.getElementById('education-btn-hun');
    let educationHtml = document.getElementById('education-hun');

    experienceHtml?.classList.remove('hide');
    experienceBtn?.classList.add('active');
    educationBtn?.classList.remove('active');
    educationHtml?.classList.add('hide');
  }

  showEducationHun() {
    let experienceBtn = document.getElementById('experience-btn-hun');
    let experienceHtml = document.getElementById('experience-hun');
    let educationBtn = document.getElementById('education-btn-hun');
    let educationHtml = document.getElementById('education-hun');

    experienceHtml?.classList.add('hide');
    experienceBtn?.classList.remove('active');
    educationBtn?.classList.add('active');
    educationHtml?.classList.remove('hide');
  }


}
