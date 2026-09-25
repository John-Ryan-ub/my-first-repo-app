import { Routes } from '@angular/router';
import { Home } from './home/home';
import { JohtoRegion } from './johto-region/johto-region';
import { KantoRegion } from './kanto-region/kanto-region';
import { HoennRegion } from './hoenn-region/hoenn-region';


export const routes: Routes = [
{ path: 'home', component: Home },
{ path: 'johtoregion', component: JohtoRegion },
{ path: 'kantoregion', component: KantoRegion },
{ path: 'hoennregion', component: HoennRegion},
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];