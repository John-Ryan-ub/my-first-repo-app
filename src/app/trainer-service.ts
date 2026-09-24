import { Service } from '@angular/core';
import { Injectable, signal } from '@angular/core';

@Service()
export class TrainerService {
    private registry = signal([
        {
            name: 'Ash Ketchum',
            team: ['Pikachu', 'Charizard'],
            items: ['Light Ball', 'Charizardite Y']
        },
        {
            name: 'Misty',
            team: ['Starmie', 'Psyduck', 'Gyarados'],
            items: ['Mystic Water', 'None', 'Gyaradosite']
        },
        { 
            name: 'Brock', 
            team: ['Steelix', 'Geodude', 'Crobat'], 
            items: ['Steelixite', 'Hard Stone', 'None'] 
        },
        {
            name: 'Cynthia', 
            team: ['Garchomp', 'Milotic', 'Lucario'], 
            items: ['Garchompite', 'Leftovers', 'Life Orb'] 
        },
        {
            name: 'Red', 
            team: ['Charizard', 'Blastoise', 'Venusaur'], 
            items: ['Charizardite X', 'Blastoisinite', 'Venusaurite'] 
        }
    ]);
    trainer = this.registry.asReadonly();
}
