import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../shared/models/pokemon';
import { FormBuilder, Validators } from '@angular/forms';
import {Router, NavigationEnd} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  mySubscription: any;
  pokemons$: Observable<Pokemon[]>;
  pokemon$: Observable<Pokemon>;
  pokemons: Pokemon[];
  displayedColumns: string[] = ['dexid', 'nom', 'poids', 'taille', 'type1', 'type2', 'region', 'edit', 'delete'];

  pokemonForm = this.fb.group({
    dexid: ['',  Validators.required],
    nom: ['',  Validators.required],
    poids: ['', Validators.required],
    taille: ['', Validators.required],
    type1: ['', Validators.required],
    type2: ['/', Validators.required],
    region: ['', Validators.required],
    sprite: ['001.png', Validators.required],
    })

  constructor(private pokemonService: PokemonService, private fb: FormBuilder, private router: Router) {
    
this.router.routeReuseStrategy.shouldReuseRoute = function () {
  return false;
};
this.mySubscription = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    // Trick the Router into believing it's last link wasn't previously loaded
    this.router.navigated = false;
  }
});

  }

  ngOnInit() { 
    this.refreshTable();
    console.log(this.pokemons$);

    $(document).ready(function(){
      $('.open-modal').click(function(){
        $('.artificial-modal-background').show(1);
      });

      $('.submit').click(function(){
        $('.artificial-modal-background').hide(1);
        $('.modal').css("display", "none");
        $('.open-modal').prop('disabled', true);
        $('.bug-message').css('display','block');
      });

      $('.close').click(function(){
        $('.artificial-modal-background').hide(1);
      });
    }); 
  }

  onSubmit(){
    if(this.pokemonForm.valid){
      const pokemon = new Pokemon();

      pokemon.dexid = this.pokemonForm.value.dexid;
      pokemon.nom = this.pokemonForm.value.nom;
      pokemon.poids = this.pokemonForm.value.poids;
      pokemon.taille = this.pokemonForm.value.taille;
      pokemon.type1 = this.pokemonForm.value.type1;
      pokemon.type2 = this.pokemonForm.value.type2;
      pokemon.region = this.pokemonForm.value.region;
      pokemon.sprite = this.pokemonForm.value.sprite;
      
      this.pokemon$= this.pokemonService.post(pokemon);

      this.pokemon$.subscribe({
        next: result => {
          console.log(result);
          this.refreshTable();
          this.refreshPage();
        }
      });
    }
  }

  onDelete(id: number){
    if(confirm('Es tu certain de vouloir supprimer ce pokemon ?')){
      this.pokemonService.deletePokemonbyParameter(id).subscribe(res=>{
        this.refreshTable();
      });
    }
  }

  refreshTable(){

    this.pokemons$ = this.pokemonService.get();

    this.pokemons$.subscribe({
      next: result => {
          this.pokemons = result;
      },

      error: erreur => console.error('Erreur', erreur),
      complete: () => console.log('Finally')
    });
  }


  refreshPage() {
    location.reload();
  }


}
