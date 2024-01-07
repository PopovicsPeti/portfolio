import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNav: boolean = false;
  showMobileNav: boolean = false;
  previousRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.previousRoute = this.router.url;
      }
  
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;

        this.showNav = !['', '/', '/home', '/menu', '/weather-forecast', '/space-travel'].includes(currentRoute);
  
        if (this.showNav && currentRoute === this.previousRoute) {
          this.showNav = false;
        }
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.previousRoute = this.router.url;
      }
  
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;

        this.showMobileNav = !['', '/', '/home', '/menu'].includes(currentRoute);
  
        if (this.showMobileNav && currentRoute === this.previousRoute) {
          this.showMobileNav = false;
        }
      }
    });
  }
 
}
