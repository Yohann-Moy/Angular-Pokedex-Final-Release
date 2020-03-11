import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons$ = this.pokemonService.get();

    this.pokemons$.subscribe({
      next: result => {
          this.pokemons = result;
      },

      error: erreur => console.error(erreur),
      complete: () => console.log('Finally')
    });
    console.log(this.pokemons$);
  }

}
