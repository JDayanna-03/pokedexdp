import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  @Input({ required: true }) pokemonId: number = 1; // Add input for Pokémon ID

  pokemonName: string = ''; // Variable to store the Pokémon's name
  pokemonHeight: number = 0; // Variable to store the Pokémon's height
  pokemonWeight: number = 0; // Variable to store the Pokémon's weight

  vida: number = 0; // Variable for HP
  ataque: number = 0; // Variable for Attack
  defensa: number = 0; // Variable for Defense

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.pokemonId<0){
      this.pokemonId = 1;
    }else if (this.pokemonId>1017){
      this.pokemonId = 1017;
    }
    this.generateRandomStats(); 
    this.fetchPokemonData(this.pokemonId); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonId'] && changes['pokemonId'].currentValue) {
      this.pokemonId = changes['pokemonId'].currentValue;
      if (this.pokemonId<0){
        this.pokemonId = 1;
      }else if (this.pokemonId>1017){
        this.pokemonId = 1017;
      }
      this.fetchPokemonData(this.pokemonId); // Fetch new data when Pokémon ID changes
      this.generateRandomStats(); // Generate new random stats when Pokémon ID changes
    }
  }

  generateRandomStats(): void {
    this.vida = Math.floor(Math.random() * 30); // Random vida between 0 and 1000
    this.ataque = Math.floor(Math.random() * 11); // Random ataque between 0 and 2500
    this.defensa = Math.floor(Math.random() * 10); // Random defensa between 0 and 1500
  }

  fetchPokemonData(id: number): void {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    this.http.get<any>(apiUrl).subscribe(data => {
      this.pokemonName = data.name; // Set the Pokémon's name
      this.pokemonHeight = data.height; // Set the Pokémon's height
      this.pokemonWeight = data.weight; // Set the Pokémon's weight
    });
  }

}
