import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListatipiComponent } from './listatipi/listatipi.component';
import { ListapokemonComponent } from './listapokemon/listapokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { DettaglipkmComponent } from './dettaglipkm/dettaglipkm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListatipiComponent,
    ListapokemonComponent,
    DettaglipkmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
