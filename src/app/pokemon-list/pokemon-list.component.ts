import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Object;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons()
        .subscribe(
          data => {
            data.results.forEach(item => {
              item.id = item.url.split("https://pokeapi.co/api/v2/pokemon/")[1]
            });
            this.pokemonList = data.results;
          },
          err => console.log(err)
        )
  }

}
