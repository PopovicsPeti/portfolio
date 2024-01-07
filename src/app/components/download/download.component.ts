import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/language.service';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  @Output('close') close  = new EventEmitter<void>();
  isHungarianDownload: boolean = false;

  constructor(private LS: LanguageService) { }

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
        this.isHungarianDownload = isHungarian;
      });
  }

  onClose() {
    this.close.emit();
  }

  changeLanguage(){
    this.LS.toggleLanguage();
  }

}