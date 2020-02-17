import { ServiceSQLiteService } from './../../service/service-sqlite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {
  private _grupo: string[];
  avalaible = false;
  constructor(private service: ServiceSQLiteService) {
    this._grupo = service.getGrupos('');
  }

  ngOnInit() {
  }

  horario(numero) {
    this.avalaible = true;
    this.cargarGrupo(numero);
    this.avalaible = true;
    this.cargarMateria(numero);
    console.log('Me voy al horario', numero);
  }
  cargarMateria(numero) {
    this.service.GetAllMateriaSQL(numero).then((estudios) => {
    }).catch(() => {
      console.log('Null');
      return null;
    });
  }
  cargarGrupo(numero) {
    this.service.GetHorarioSQL(numero);
  }
}
