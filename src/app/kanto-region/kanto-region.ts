import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-kanto-region',
  styleUrl: './kanto-region.css',
  templateUrl: './kanto-region.html',
})
export class KantoRegion {
  kantoLeader = signal([
  {
    name: 'Brock',
    pokemon: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }],
    location: 'Pewter City',
    badge: 'Boulder Badge',
    motto: 'The Rock-Solid Pokémon Trainer!'
  },
  {
    name: 'Misty',
    pokemon: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }],
    location: 'Cerulean City',
    badge: 'Cascade Badge',
    motto: 'The Tomboyish Mermaid!'
  },
  {
    name: 'Lt. Surge',
    pokemon: [{ name: 'Voltorb', level: 21 }, { name: 'Pikachu', level: 18 }, { name: 'Raichu', level: 24 }],
    location: 'Vermillion City',
    badge: 'Thunder Badge',
    motto: 'The Lightning American!'
  },
  {
    name: 'Erika',
    pokemon: [{ name: 'Victreebel', level: 29 }, { name: 'Tangela', level: 24 }, { name: 'Vileplume', level: 29 }],
    location: 'Celadon City',
    badge: 'Rainbow Badge',
    motto: 'The Nature-Loving Princess!'
  },
  {
    name: 'Koga',
    pokemon: [{ name: 'Koffing', level: 37 }, { name: 'Muk', level: 39 }, { name: 'Weezing', level: 43 }],
    location: 'Fuchsia City',
    badge: 'Soul Badge',
    motto: 'The Poisonous Ninja Master!'
  },
  {
    name: 'Sabrina',
    pokemon: [{ name: 'Mr. Mime', level: 37 }, { name: 'Kadabra', level: 38 }, { name: 'Venomoth', level: 38 }, { name: 'Alakazam', level: 43 }],
    location: 'Saffron City',
    badge: 'Marsh Badge',
    motto: 'The Master of Psychic Pokémon!'
  },
  {
    name: 'Blaine',
    pokemon: [{ name: 'Growlithe', level: 42 }, { name: 'Ponyta', level: 40 }, { name: 'Rapidash', level: 42 }, { name: 'Arcanine', level: 47 }],
    location: 'Cinnabar Island',
    badge: 'Volcano Badge',
    motto: 'The Hotheaded Quiz Master!'
  },
  {
    name: 'Giovanni',
    pokemon: [{ name: 'Rhyhorn', level: 45 }, { name: 'Dugtrio', level: 42 }, { name: 'Nidoking', level: 44 }],
    location: 'Viridian City',
    badge: 'Earth Badge',
    motto: 'The Self-Proclaimed Strongest Trainer!'
  }
]);

  showMotto(leader: any): void {
    alert(`${leader.name}'s Motto: "${leader.motto}"`);
  }
}
