import { Component, signal } from '@angular/core';
import { KantoRegion } from "./kanto-region/kanto-region";
import { JohtoRegion } from "./johto-region/johto-region";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';


@Component({
  imports: [Navbar, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'gym-leaders'
  
}
