import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotifyPage } from './spotify.page';

const routes: Routes = [
  {
    path: '',
    component: SpotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotifyPageRoutingModule {}
