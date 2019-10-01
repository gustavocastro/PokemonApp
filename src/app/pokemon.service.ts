import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonListURL: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  loadPokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.pokemonListURL);
  }

  loadPokemon(id) {
    return this.http.get(this.loadPokemonURL + id);
  }
}
