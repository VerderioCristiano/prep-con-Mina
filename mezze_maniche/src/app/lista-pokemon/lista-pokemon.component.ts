import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ListaPokemon } from '../model';


@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent {
  o!: Observable<ListaPokemon>
  title = 'mezze_maniche';
  mialista!: ListaPokemon;

  constructor(public http : HttpClient){
    this.o = this.http.get<ListaPokemon> ("https://pokeapi.co/api/v2/type");
    this.o.subscribe(this.getData);
  }

  getData = (getData : ListaPokemon) => {
    this.mialista = getData;
    console.log(this.mialista)
  }



}
