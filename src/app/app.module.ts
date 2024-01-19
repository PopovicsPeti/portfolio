import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { SpaceComponent } from './components/space/space.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MassageComponent } from './components/massage/massage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DownloadDirective } from './download/download.directive';
import { DownloadComponent } from './components/download/download.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    MotivationComponent,
    SpaceComponent,
    WeatherComponent,
    MassageComponent,
    MenuComponent,
    NavbarComponent,
    ButtonComponent,
    SideBarComponent,
    DownloadDirective,
    DownloadComponent,
    MobileNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DownloadComponent]
})
export class AppModule { }
