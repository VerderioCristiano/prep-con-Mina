import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { dettagli_pokemon } from 'src/models/dettagli_pokemon.models';

@Component({
  selector: 'app-dettaglipkm',
  templateUrl: './dettaglipkm.component.html',
  styleUrls: ['./dettaglipkm.component.css']
})
export class DettaglipkmComponent {
  poke!: dettagli_pokemon;
  url = "https://pokeapi.co/api/v2/pokemon/";
  obs! :Observable<dettagli_pokemon>;
  constructor(public http: HttpClient, private route : ActivatedRoute){
    this.route.paramMap.subscribe(this.getRoutPam);
   


  }
  getRoutPam = (params : ParamMap) =>
    {
      this.obs = this.http.get<dettagli_pokemon>(this.url + params.get('name'))
      this.obs.subscribe(this.getData)
    }

  getData = (data : dettagli_pokemon) =>
  {
    this.poke = data
  }
}
