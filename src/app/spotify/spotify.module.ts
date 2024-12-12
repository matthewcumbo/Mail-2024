import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotifyPageRoutingModule } from './spotify-routing.module';

import { SpotifyPage } from './spotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotifyPageRoutingModule
  ],
  declarations: [SpotifyPage]
})
export class SpotifyPageModule {}
