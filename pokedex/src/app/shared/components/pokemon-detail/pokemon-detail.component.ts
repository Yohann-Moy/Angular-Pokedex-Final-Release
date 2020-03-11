import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { }
  public pokemonName;
  pokemonList: Pokemon[];

  ngOnInit() {

    this.pokemonService.getPokemonByParameter(this.route.snapshot.paramMap.get('nom')).subscribe(
      data => {
        this.pokemonList = data;
      }
    );
    let pokemonNom = this.route.snapshot.paramMap.get('nom');
    this.pokemonName = pokemonNom;
  }
}
