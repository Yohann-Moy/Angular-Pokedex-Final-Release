import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import {MatCardModule} from '@angular/material/card';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PokemonComponent, PokemonListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule, // Permet d'utiliser les formulaires & aussi les FormGroups //
    RouterModule, // Permet d'utiliser le routage sur dans le module pokemon // 
  ],
  providers:[
    PokemonService
  ]
})
export class PokemonModule { }
