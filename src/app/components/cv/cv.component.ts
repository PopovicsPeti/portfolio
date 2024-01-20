import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
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
    this.switchToHun = !this.switchToHun;
  }

  showExperience(){
    let experienceBtn = document.getElementById('experience-btn');
    let experienceBtnHun = document.getElementById('experience-btn-hun');
    let experienceHtml = document.getElementById('experiance');
    let educationBtn = document.getElementById('education-btn');
    let educationBtnHun = document.getElementById('education-btn-hun');
    let educationHtml = document.getElementById('education');

    experienceHtml?.classList.remove('hide');
    experienceBtn?.classList.add('active');
    experienceBtnHun?.classList.add('active');
    educationBtn?.classList.remove('active');
    educationBtnHun?.classList.remove('active');
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

