import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexToolbarComponent } from './pokedex-toolbar/pokedex-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokedexMenuComponent } from './components/pokedex-menu/pokedex-menu.component';
import { RouterModule } from '@angular/router';
import { AddNewPokemonComponent } from './components/add-new-pokemon/add-new-pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { PokemonEditionComponent } from './components/pokemon-edition/pokemon-edition.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { PokemonByRegionComponent } from './components/pokemon-by-region/pokemon-by-region.component';



@NgModule({
  declarations: [PokedexToolbarComponent, NotFoundComponent, PokedexMenuComponent, AddNewPokemonComponent, PokemonDetailComponent, PokemonEditionComponent, PokedexListComponent, PokemonByRegionComponent],
  // tslint:disable-next-line: max-line-length
  imports: [CommonModule, MatCardModule, MatToolbarModule, RouterModule, ReactiveFormsModule], // Pour pouvoir utiliser ces modules, on les importe //
  exports: [PokedexToolbarComponent, NotFoundComponent, PokedexMenuComponent] // Pour réutiliser ce module, on l'exporte //
})
export class SharedModule { }
