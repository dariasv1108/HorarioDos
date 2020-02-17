import { ServiceSQLiteService } from './../../service/service-sqlite.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  avalaible = false;

  constructor(private datosService: ServiceSQLiteService) {
  }
  getStudios() {
    this.avalaible = true;
    this.cargarEstados();
    this.cargarHora();
    this.cargarSemana();
  }

  cargarEstados() {
    console.log('Solicitando');
    this.datosService.GetEstudiosSQL().then((estudios) => {
    }).catch(() => {
      console.log('Null');
      return null;
    });
  }

  cargarSemana() {
    console.log('Solicitando');
    this.datosService.GetHoraSQL().then((estudios) => {
    }).catch(() => {
      console.log('Null');
      return null;
    });
  }

  cargarHora() {
    console.log('Solicitando');
    this.datosService.GetSemanaSQL().then((estudios) => {
    }).catch(() => {
      console.log('Null');
      return null;
    });
  }


}
