import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViagemComponent } from './viagem/viagem.component';

const routes: Routes = [

  {
  path: '',
  component: ViagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
