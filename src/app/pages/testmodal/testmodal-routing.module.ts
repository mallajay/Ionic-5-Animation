import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestmodalPage } from './testmodal.page';

const routes: Routes = [
  {
    path: '',
    component: TestmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestmodalPageRoutingModule {}
