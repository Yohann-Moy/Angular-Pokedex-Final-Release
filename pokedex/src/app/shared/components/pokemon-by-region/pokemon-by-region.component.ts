import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../../pokemon/services/regions.service';
import { Pokemon } from 'src/app/shared/models/pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-pokemon-by-region',
  templateUrl: './pokemon-by-region.component.html',
  styleUrls: ['./pokemon-by-region.component.scss']
})
export class PokemonByRegionComponent implements OnInit {

  constructor(private regionService: RegionService, private route: ActivatedRoute, private router: Router) { }
  public regionName;
  pokemonList: Pokemon[];

  ngOnInit() {
    this.regionService.getPokemonByParameter(this.route.snapshot.paramMap.get('nom')).subscribe(
      data => {
        this.pokemonList = data;
      }
    );
    let regionNom = this.route.snapshot.paramMap.get('nom');
    this.regionName = regionNom;
    //$(document).ready(function(){});
  }
}
