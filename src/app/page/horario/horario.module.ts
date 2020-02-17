import { HorasPipe } from './../../pipe/horas/horas.pipe';
import { DiasPipe } from './../../pipe/dias/dias.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioPageRoutingModule } from './horario-routing.module';

import { HorarioPage } from './horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPageRoutingModule
  ],
  declarations: [HorarioPage, DiasPipe, HorasPipe]
})
export class HorarioPageModule { }
