import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Specific_tipi } from 'src/models/lista_pokemon.models';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-listapokemon',
  templateUrl: './listapokemon.component.html',
  styleUrls: ['./listapokemon.component.css']
})
export class ListapokemonComponent {
  poke!: Specific_tipi;
  url = "https://pokeapi.co/api/v2/type/";
  obs! :Observable<Specific_tipi>;
  constructor(public http: HttpClient, private route : ActivatedRoute){
    this.route.paramMap.subscribe(this.getRoutPam);
   


  }
  getRoutPam = (params : ParamMap) =>
    {
      this.obs = this.http.get<Specific_tipi>(this.url + params.get('tipo'))
      this.obs.subscribe(this.getData)
    }

  getData = (data : Specific_tipi) =>
  {
    this.poke = data
  }
}
