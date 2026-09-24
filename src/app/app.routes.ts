import { Routes } from '@angular/router';
import { JohtoRegion } from './johto-region/johto-region';
import { KantoRegion } from './kanto-region/kanto-region';
import { Home } from './home/home';


export const routes: Routes = [
{ path: 'home', component: Home },
{ path: 'johtoregion', component: JohtoRegion },
{ path: 'kantoregion', component: KantoRegion },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];