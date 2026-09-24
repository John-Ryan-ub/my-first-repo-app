import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-johto-region',
  styleUrl: './johto-region.css',
  templateUrl: './johto-region.html',
})
export class JohtoRegion {
  johtoLeader = signal([
  {
    name: 'Falkner', 
    pokemon: [{name: 'Pidgey', level: 7}, {name: 'Pidgeotto', level: 9}], 
    location: 'Violet City', 
    badge: 'Zephyr Badge', 
    motto: 'The Elegant Master of Flying Pokémon!'
  },
  {
    name: 'Bugsy', 
    pokemon: [{name: 'Metapod', level: 14}, {name: 'Kakuna', level: 14}, {name: 'Scyther', level: 16}], 
    location: 'Azalea Town', 
    badge: 'Hive Badge', 
    motto: 'The Walking Bug Pokémon Encyclopedia!'
  },
  {
    name: 'Whitney', 
    pokemon: [{name: 'Clefairy', level: 18}, {name: 'Miltank', level: 20}], 
    location: 'Goldenrod City', 
    badge: 'Plain Badge', 
    motto: 'The Incredibly Pretty Girl!'
  },
  {
    name: 'Morty', 
    pokemon: [{name: 'Gastly', level: 21}, {name: 'Haunter', level: 21}, {name: 'Gengar', level: 25}], 
    location: 'Ecruteak City', 
    badge: 'Fog Badge', 
    motto: 'The Mystic Seer of the Future!'
  },
  {
    name: 'Chuck', 
    pokemon: [{name: 'Primeape', level: 29}, {name: 'Poliwrath', level: 31}], 
    location: 'Cianwood City', 
    badge: 'Storm Badge', 
    motto: 'His Roaring Fists Do the Talking!'
  },
  {
    name: 'Jasmine', 
    pokemon: [{name: 'Magnemite', level: 30}, {name: 'Steelix', level: 35}], 
    location: 'Olivine City', 
    badge: 'Mineral Badge', 
    motto: 'The Iron-Clad Defense Girl!'
  },
  {
    name: 'Pryce', 
    pokemon: [{name: 'Seel', level: 30}, {name: 'Dewgong', level: 32}, {name: 'Piloswine', level: 34}], 
    location: 'Mahogany Town', 
    badge: 'Glacier Badge', 
    motto: 'The Teacher of Winter\'s Harshness!'
  },
  {
    name: 'Clair', 
    pokemon: [{name: 'Dragonair', level: 37}, {name: 'Kingdra', level: 40}], 
    location: 'Blackthorn City', 
    badge: 'Rising Badge', 
    motto: 'The Blessed User of Dragon Pokémon!'
  }
]);

  showMotto(leader: any): void {
    alert(`${leader.name}'s Motto: "${leader.motto}"`);
  }
}
