import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import Pokemon from '../pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon("", [], []);

  constructor(
      private http: HttpClient, 
      private route: ActivatedRoute,
      private pokemonService: PokemonService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokemonService.loadPokemon(params.get("id"))
          .subscribe(
            data => {
              this.pokemon = {
                name: data["name"],
                abilities: data["abilities"],
                types: data["types"]
              }
            }
          )
    });
  }

}
