import { Component, Input } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent,GraficoComponent, FormsModule],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  @Input() pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  pokemonActual: number = 1;
  posicionPokemon: string = 'front';
  
  handlePokemon(event:number){
    this.pokemonActual += event
    if (this.pokemonActual<0){
      this.pokemonActual = 1;
    }else if (this.pokemonActual>1017){
      this.pokemonActual = 1017;
    }
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/${this.pokemonActual}.png`;
  }

  handleGirarPokemon(event:string){
    this.posicionPokemon = event;
    if(this.posicionPokemon == 'back'){
      this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/back/${this.pokemonActual}.png`;
    }else{
      this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/${this.pokemonActual}.png`;
    }
  }

}
