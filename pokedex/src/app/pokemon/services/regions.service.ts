import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable()
  export class RegionService {

    constructor(private httpclient: HttpClient){

    }

    getRegion(): Observable<any>{
        return this.httpclient.get('http://localhost:3000/regions');
    }

    getPokemonByParameter(regionIdentifier): Observable<any>{
      let param1 = new HttpParams().set('region', regionIdentifier);
      return this.httpclient.get('http://localhost:3000/pokemons', {params: param1});
    }

  }
