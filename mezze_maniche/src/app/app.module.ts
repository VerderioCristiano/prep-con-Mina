import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { ListatipiComponent } from './listatipi/listatipi.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    ListatipiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
