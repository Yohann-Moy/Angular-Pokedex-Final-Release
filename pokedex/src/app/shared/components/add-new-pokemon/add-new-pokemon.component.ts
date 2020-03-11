import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-pokemon',
  templateUrl: './add-new-pokemon.component.html',
  styleUrls: ['./add-new-pokemon.component.scss']
})
export class AddNewPokemonComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;
  pokemon$: Observable<Pokemon>;
  pokemons: Pokemon[];
  
  pokemonForm = this.fb.group({
    dexid: ['',  Validators.required],
    nom: ['',  Validators.required],
    poids: ['', Validators.required],
    taille: ['', Validators.required],
    type1: ['', Validators.required],
    type2: ['/', Validators.required],
    sprite: ['no image', Validators.required],
  });


  constructor(private pokemonService: PokemonService, private fb: FormBuilder,  private router: Router) {

  }

  ngOnInit() {
    console.log(this.pokemons$);
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
      pokemon.sprite = this.pokemonForm.value.sprite;
      this.pokemon$ = this.pokemonService.post(pokemon);

      this.pokemon$.subscribe({
        next: result => {
          console.log(result);
        }
      });

      alert('Félicitation '+this.pokemonForm.value.nom.toUpperCase()+' a été ajouté à la liste des Pokemons');
      // Redirige vers l'URL pokemon //
      this.router.navigate(['/pokemons']);
    }
  }

}
