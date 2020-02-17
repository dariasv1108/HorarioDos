import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstuiosPageRoutingModule } from './estuios-routing.module';

import { EstuiosPage } from './estuios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstuiosPageRoutingModule
  ],
  declarations: [EstuiosPage]
})
export class EstuiosPageModule {}
