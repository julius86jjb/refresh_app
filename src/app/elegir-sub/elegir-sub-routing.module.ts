import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirSubPage } from './elegir-sub.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirSubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirSubPageRoutingModule {}
