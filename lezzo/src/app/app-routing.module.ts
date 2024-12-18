import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatipiComponent } from './listatipi/listatipi.component';
import { ListapokemonComponent } from './listapokemon/listapokemon.component';
import { DettaglipkmComponent } from './dettaglipkm/dettaglipkm.component';

const routes: Routes = [
  {path: '', component: ListatipiComponent },
  {path: 'type/:tipo', component: ListapokemonComponent},
  {path:'pokemon/:name', component: DettaglipkmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
