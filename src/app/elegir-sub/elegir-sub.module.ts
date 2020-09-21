import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirSubPageRoutingModule } from './elegir-sub-routing.module';

import { ElegirSubPage } from './elegir-sub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirSubPageRoutingModule
  ],
  declarations: [ElegirSubPage]
})
export class ElegirSubPageModule {}
