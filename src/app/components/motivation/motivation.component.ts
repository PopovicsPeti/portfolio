import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {
  isHungarianMotivation: boolean = false;

  constructor(private LS: LanguageService) { }

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
        this.isHungarianMotivation = isHungarian;
      });
  }
}
