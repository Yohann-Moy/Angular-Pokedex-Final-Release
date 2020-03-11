import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AddNewPokemonComponent } from './shared/components/add-new-pokemon/add-new-pokemon.component';
import { PokemonDetailComponent } from './shared/components/pokemon-detail/pokemon-detail.component';
import { PokemonEditionComponent } from './shared/components/pokemon-edition/pokemon-edition.component';
import { PokedexListComponent } from './shared/components/pokedex-list/pokedex-list.component';
import { PokemonByRegionComponent } from './shared/components/pokemon-by-region/pokemon-by-region.component';

// Une route s'ignifie l'URL HTTP locale / quelque chose

const routes: Routes = [
  // Une route //
  {
    path:'', // Toute la partie qui se situe après le slash dans l'URL.
    redirectTo: '/regions', // On redirige l'URL http://localhost:3000/ vers http://localhost:3000/pokemon en fnct du chemin d'avant.
    pathMatch: 'full' // Réécrire mot à mot ce qui est écrit dans l'URL //
  }, // Jusqu'ici //,
  {
    path:'regions',
    component : PokedexListComponent, // Inserer le nom d'un composant //
    pathMatch: 'full'
  },
  { 
    path: 'region/:nom',
    component: PokemonByRegionComponent 
  },
  {
    path:'pokemons',
    component : PokemonComponent, // Inserer le nom d'un composant //
    pathMatch: 'full'
  },
   {
    path:'add_new',
    component : AddNewPokemonComponent, // Inserer le nom d'un composant //
    pathMatch: 'full'
  },
  { 
    path: 'pokemon/:nom',
    component: PokemonDetailComponent 
  },
  { 
    path: 'pokemon/edit/:id',
    component: PokemonEditionComponent
  },
  {
    path:'**', // ** s'ignifie une URL qui n'existe pas.
    component : NotFoundComponent // Dans ce cas on redirige sur le component 'NotFoundComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
