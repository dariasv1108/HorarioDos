import { Component, OnInit } from '@angular/core';
import { ServiceSQLiteService } from 'src/app/service/service-sqlite.service';

@Component({
  selector: 'app-estuios',
  templateUrl: './estuios.page.html',
  styleUrls: ['./estuios.page.scss'],
})
export class EstuiosPage implements OnInit {

  private _estudios: any;

  constructor(private datosService: ServiceSQLiteService) {
    this.estudios = this.datosService.getEsudios();
  }

  ngOnInit() {
  }

  grupo(numero) {
    this.datosService.GetGrupoSQL(numero);
    console.log('Me voy a los grupos ', numero);
  }


  public get estudios(): any {
    return this._estudios;
  }

  public set estudios(value: any) {
    this._estudios = value;
  }

}
