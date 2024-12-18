import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipi_poke } from 'src/models/lista_tipi.models';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-listatipi',
  templateUrl: './listatipi.component.html',
  styleUrls: ['./listatipi.component.css']
})
export class ListatipiComponent {
  poke!: Tipi_poke;
  url = "https://pokeapi.co/api/v2/type";
  obs! :Observable<Tipi_poke>;
  constructor(public http: HttpClient){
    this.obs = this.http.get<Tipi_poke>(this.url)
    this.obs.subscribe(this.getData)


  }

  getData = (data : Tipi_poke) =>
  {
    this.poke = data
  }

}
