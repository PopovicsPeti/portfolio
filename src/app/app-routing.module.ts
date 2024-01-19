import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { SpaceComponent } from './components/space/space.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MassageComponent } from './components/massage/massage.component';
import { CvComponent } from './components/cv/cv.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { hiddenNavbar: true } },
  { path: 'menu', component: MenuComponent, data: { hiddenNavbar: true } },
  { path: 'cv', component: CvComponent },
  { path: 'motivation-letter', component: MotivationComponent },
  {
    path: 'space-travel',
    component: SpaceComponent,
    data: { hiddenNavbar: true },
  },
  {
    path: 'weather-forecast',
    component: WeatherComponent,
    data: { hiddenNavbar: true },
  },
  { path: 'massage-website', component: MassageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
