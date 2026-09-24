import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { JohtoRegion } from './johto-region/johto-region';
import { KantoRegion } from './kanto-region/kanto-region';


export const routes: Routes = [
// 1. Landing Page (localhost:4200/home)
{ path: 'home', component: Navbar },
// 2. Shakes Menu (localhost:4200/shakes)
{ path: 'johtoregion', component: JohtoRegion },

{ path: 'kantoregion', component: KantoRegion },

{ path: '', redirectTo: 'home', pathMatch: 'full' }
];