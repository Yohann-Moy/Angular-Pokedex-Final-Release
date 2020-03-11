import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-edition',
  templateUrl: './pokemon-edition.component.html',
  styleUrls: ['./pokemon-edition.component.scss']
})
export class PokemonEditionComponent implements OnInit {


  pokemonForm = this.fb.group({
    dexid: [Validators.required],
    nom: [Validators.required],
    poids: [Validators.required],
    taille: [Validators.required],
    type1: [Validators.required],
    type2: [Validators.required],
    region: [Validators.required],
    sprite: [Validators.required],
  });

  constructor( private pokemonService: PokemonService, private route: ActivatedRoute, private fb: FormBuilder,  private router: Router) { }
  
  public pokemonName;
  pokemonList: Pokemon[];
  /* pokemonPuts: Pokemon; */
  pokemonPatch: Pokemon;

  ngOnInit() {
    let pokemonNom = this.route.snapshot.paramMap.get('id');
    this.pokemonName = pokemonNom;

    this.pokemonService.getPokemonByParameterId(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.pokemonList = data;
      }
    );
  }

  onPatch(id: number){
    if(this.pokemonForm.valid){
      
      const pokemon = new Pokemon();

      // Chaque attribut de pokemon est affecté à une valeur en provenance du formulaire //

      pokemon.dexid = this.pokemonForm.value.dexid;
      pokemon.nom = this.pokemonForm.value.nom;
      pokemon.poids = this.pokemonForm.value.poids;
      pokemon.taille = this.pokemonForm.value.taille;
      pokemon.type1 = this.pokemonForm.value.type1;
      pokemon.type2 = this.pokemonForm.value.type2;
      pokemon.sprite = this.pokemonForm.value.sprite;
      pokemon.region = this.pokemonForm.value.region;

      this.pokemonService.patch(id, pokemon).subscribe(
        data => {
          this.pokemonPatch = data;
        }
      );
      //Permet à la vue contenant le tableau des pokemons de se refresh tranquillement //
      setTimeout(() => this.router.navigate(['/pokemons']), 500);
    }
  }

  onSubmit(id: number){
    this.onPatch(id);
    
  }

}
