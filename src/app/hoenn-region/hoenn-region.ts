import { Component, inject } from '@angular/core';
import { TrainerService } from '../trainer-service';

@Component({
  imports: [],
  selector: 'app-hoenn-region',
  styleUrl: './hoenn-region.css',
  templateUrl: './hoenn-region.html',
})
export class HoennRegion {
  trainerService = inject(TrainerService);
}
