import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';

// Aide à récuperer les informations en provenances de la BDD via le fake back end //

@Injectable({ 
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { 
  }

  get(): Observable <Pokemon[]>{
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemons');
  }

  getPokemonByParameter(pokemonIdentifier): Observable<any>{
    let parameter = new HttpParams().set('nom', pokemonIdentifier);
    return this.http.get('http://localhost:3000/pokemons', {params: parameter});
  }

  getPokemonByParameterId(pokemonIdentifier): Observable<any>{
    let parameter = new HttpParams().set('id', pokemonIdentifier);
    return this.http.get('http://localhost:3000/pokemons', {params: parameter});
  }

  post(pokemon: Pokemon): Observable <Pokemon> {
    return this.http.post<Pokemon>('http://localhost:3000/pokemons', pokemon);
  }

  // N'enregistre rien en base //
/*   put(pokemon: Pokemon): Observable <any>{
    return this.http.put('http://localhost:3000/pokemons/5', pokemon);
  } */

  // Applique les modifications en base de donnée //
  // tslint:disable-next-line: max-line-length
  // recuperer l'id dans lors du lancement de la méthode dans le composant par l'intemédiaire de l'appel de la fonction dans le formulaire //
  patch(id: number, pokemon: Pokemon): Observable<any>{

    // Recupere l'id du pokemon dans la route et l'affecte dans une variable //
    return this.http.patch('http://localhost:3000/pokemons/'+id, pokemon);
  }

  deletePokemonbyParameter(id: number){
    return this.http.delete('http://localhost:3000/pokemons/'+id);
  }
}
