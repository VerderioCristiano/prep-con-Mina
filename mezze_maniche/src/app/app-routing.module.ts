import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';  // Importa il componente corretto
import { ListatipiComponent } from './listatipi/listatipi.component';

const routes: Routes = [
  {path: 'pokemon/:nome', component: ListaPokemonComponent },
  {path:'', component:ListatipiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
