import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  isHungarianMobileNav: boolean = false;

  constructor(private LS: LanguageService) { }

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
      this.isHungarianMobileNav = isHungarian;
    });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  //   this.isHungarianMobileNav = this.LS.isHungarianLanguage;
  // }

  menuToggle(){
    const nav = document.getElementById("navigation");
    const button = document.querySelector(".mobile-nav-toggle");
    
    if (!this.isMenuOpen){
      nav?.classList.add('open');
      button?.classList.add('mobile-nav-toggle-open');
    } 
    
    if (this.isMenuOpen) {
      nav?.classList.remove('open');
      button?.classList.remove('mobile-nav-toggle-open');
    }
    this.isMenuOpen =! this.isMenuOpen
  }

  changeLanguage() {
    //this.isHungarianCv =! this.isHungarianCv;
    this.menuToggle();
    this.LS.toggleLanguage();
    console.log(this.isHungarianMobileNav)
    console.log(this.LS.isHungarianLanguage)
  }
}
