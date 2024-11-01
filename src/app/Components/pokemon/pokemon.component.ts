import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
@Input({required:true})solicitarImagen:string ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
@Output() clickPokemon = new EventEmitter<number>();
@Output() clickGirarPokemon = new EventEmitter<string>();

posicion = 'front';

anteriorPokemon(){
  this.clickPokemon.emit(-1);
}

siguientePokemon(){
  this.clickPokemon.emit(1);
}

girarPokemon(){
  if (this.posicion == 'back'){
    this.posicion = 'front';
  }else{
    this.posicion = 'back';
  }
  this.clickGirarPokemon.emit(this.posicion);
}

}
