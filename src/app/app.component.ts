import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  previousRoute: string = '';
  public breakpointChange$: Observable<string>;
  hiddenNavbar = false;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'xsmall'],
    [Breakpoints.Small, 'small'],
    [Breakpoints.Medium, 'medium'],
    [Breakpoints.Large, 'large'],
    [Breakpoints.XLarge, 'xlarge'],
  ]);

  constructor(
    breakpointObserver: BreakpointObserver,
    private languageService: LanguageService,
    private router: Router
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

          return classValue;
        })
      );
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        this.languageService.setLanguage(false);

        this.hiddenNavbar = event.snapshot.data['hiddenNavbar'];
      }
    });
  }
}
