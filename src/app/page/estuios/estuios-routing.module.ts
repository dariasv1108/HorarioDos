import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstuiosPage } from './estuios.page';

const routes: Routes = [
  {
    path: '',
    component: EstuiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstuiosPageRoutingModule {}
