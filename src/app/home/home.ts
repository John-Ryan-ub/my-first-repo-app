import { Component } from '@angular/core';
import { JohtoRegion } from '../johto-region/johto-region';
import { KantoRegion } from '../kanto-region/kanto-region';
import { HoennRegion } from '../hoenn-region/hoenn-region';

@Component({
  imports: [JohtoRegion, KantoRegion, HoennRegion],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
