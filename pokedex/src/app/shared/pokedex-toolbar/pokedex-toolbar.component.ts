import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-toolbar', // nom de la balise a utiliser dans le fichier HTML //
  templateUrl: './pokedex-toolbar.component.html', // template dans lequel on va injecter les informations //
  styleUrls: ['./pokedex-toolbar.component.scss'] // feuilles de style(s)//
})
export class PokedexToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
