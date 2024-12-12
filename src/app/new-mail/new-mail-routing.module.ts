import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMailPage } from './new-mail.page';

const routes: Routes = [
  {
    path: '',
    component: NewMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMailPageRoutingModule {}
