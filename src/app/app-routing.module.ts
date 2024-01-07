import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { SpaceComponent } from './components/space/space.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MassageComponent } from './components/massage/massage.component';
import { CvComponent } from './components/cv/cv.component';
import { MenuComponent } from './components/menu/menu.component';
import { CvDesktopComponent } from './components/cv-desktop/cv-desktop.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cv', component: CvComponent},
  {path: 'cv-desktop', component: CvDesktopComponent},
  {path: 'motivation-letter', component: MotivationComponent},
  {path: 'space-travel', component: SpaceComponent},
  {path: 'weather-forecast', component: WeatherComponent},
  {path: 'massage-website', component: MassageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
