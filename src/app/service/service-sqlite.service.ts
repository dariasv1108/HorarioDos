import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatosServiciosInt } from './../interface/datosServiceInt';
import { Injectable } from '@angular/core';
import { Horario } from '../core/model/Horario';
import { MateriaHoras } from '../core/model/MateriaHora';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceSQLiteService implements DatosServiciosInt {

  db: SQLiteObject;
  isOpen = false;
  private _estudios: string[];
  private _grupo: string[];
  private _asignaturas: any[];
  private _horas: any[];
  private _semana: any[];
  private _horario: Horario;
  avalaible = false;

  constructor(public storage: SQLite, public sqliteDbCopy: SqliteDbCopy, private router: Router) {
    this.sqliteDbCopy.copy('Horario16.db', 0)
      .then((res: any) => console.log('copiando bbd correcto', res))
      .catch((error: any) => console.error('copiando bbdd error', error));
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "Horario16.db", location: "default", createFromLocation: 1 }).then(
        (db: SQLiteObject) => {
          console.log('entro bien en el create');
          this.db = db;
          this.isOpen = true;
        }).catch(() => console.log('create me echa de aqui'));
    }
  }

  getEsudios(): string[] {
    return this.estudios;
  }
  getGrupos(estudio: string): string[] {
    return this.grupo;
  }
  getHorario(grupo: string): Horario {
    return this.horario;
  }
  getDescripcion(materia: MateriaHoras): string[] {
    throw new Error("Method not implemented.");
  }

  GetHorarioSQL(grupo) {
    this.avalaible = true;
    let cuadrante = [];
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.semana.length; index++) {
      const semana = this.semana[index];
      let diaClase;
      this.GetDiaClase(grupo, semana.idDiaSemana).then((data) => {
        diaClase = data;
        for (let indexHoras = 0; indexHoras < this.horas.length; indexHoras++) {
          const horas = this.horas[indexHoras];
          let horaClase;
          cuadrante[indexHoras] = [];
          this.GetHoraClase(diaClase[0].idDiaClase, horas.idHorasSemana).then((data) => {
            horaClase = data;
            let materia: any;
            this.GetMateria(horaClase[0].idHoraClase).then((data) => {
              materia = data;
              let clasecita = [];
              materia.forEach(element => {
                this.GetOneMateriaSQL(element.idMateria).then((data) => {
                  clasecita.push(data[0]);
                });

              });
              cuadrante[indexHoras][index] = clasecita;
            });
          });
        }
      });
    }


    this.horario = new Horario('', grupo, cuadrante);
  }

  GetEstudiosSQL() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM estudios where ?', [1])
        .then(
          (data) => {
            console.log('entro en el select all estudios');
            let arrayEstudios = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayEstudios.push({
                  idEstudios: data.rows.item(i).idEstudios,
                  nombre: data.rows.item(i).nombre,
                });
              }
              this.estudios = arrayEstudios;
              console.log(arrayEstudios);
              resolve(arrayEstudios);
            }
            this.router.navigateByUrl('/estuios');
          })
        .catch((error) => {
          console.log('error al leer all estudios ', error);
          reject(error);
        }
        );
    });
  }

  GetSemanaSQL() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM diaSemana where ?', [1])
        .then(
          (data) => {
            console.log('entro en el select all diaSemana');
            const arrayDiaSemana = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayDiaSemana.push({
                  idDiaSemana: data.rows.item(i).idDiaSemana,
                  nombre: data.rows.item(i).nombre,
                });
              }
              this.semana = arrayDiaSemana;
              console.log(arrayDiaSemana);
              resolve(arrayDiaSemana);
            }
          })
        .catch((error) => {
          console.log('error al leer all diaSemana ', error);
          reject(error);
        }
        );
    });
  }

  GetHoraClase(idClase, idHora) {
    let sql = "SELECT * FROM horaClase where idDiaClase like " + idClase + " and idHorasSemana like '" + idHora + "'";
    console.log('Consulta', sql);
    return new Promise((resolve, reject) => {
      this.db.executeSql(sql, [])
        .then(
          (data) => {
            // console.log('entro en el select all horaClase');
            const arrayHorasSemana = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayHorasSemana.push({
                  idHoraClase: data.rows.item(i).idHoraClase,
                  idHorasSemana: data.rows.item(i).idHorasSemana,
                  idDiaClase: data.rows.item(i).idDiaClase
                });
              }
              console.log(arrayHorasSemana);
              resolve(arrayHorasSemana);
            }
          })
        .catch((error) => {
          console.log('error al leer all horaClase ', error);
          reject(error);
        }
        );
    });
  }

  GetDiaClase(idGrupo, idSemana) {
    let sql = "SELECT * FROM diaClase where idGrupo like " + idGrupo + " and idDiaSemana like '" + idSemana + "'";
    //console.log("Consulta:", sql);
    return new Promise((resolve, reject) => {
      this.db.executeSql(sql, [])
        .then(
          (data) => {
            // console.log('entro en el select all diaClase');
            const arrayHorasSemana = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayHorasSemana.push({
                  idDiaClase: data.rows.item(i).idDiaClase,
                  idDiaSemana: data.rows.item(i).idDiaSemana,
                  idGrupo: data.rows.item(i).idGrupo
                });
              }
              console.log(arrayHorasSemana);
              resolve(arrayHorasSemana);
            }
          })
        .catch((error) => {
          console.log('error al leer all diaClase ', error);
          reject(error);
        }
        );
    });
  }

  GetHoraSQL() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM horasSemana where ?', [1])
        .then(
          (data) => {
            console.log('entro en el select all horasSemana');
            const arrayHorasSemana = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayHorasSemana.push({
                  idHorasSemana: data.rows.item(i).idHorasSemana,
                  nombre: data.rows.item(i).descripcion,
                });
              }
              this.horas = arrayHorasSemana;
              console.log(arrayHorasSemana);
              resolve(arrayHorasSemana);
            }
          })
        .catch((error) => {
          console.log('error al leer all horasSemana ', error);
          reject(error);
        }
        );
    });
  }

  GetGrupoSQL(id) {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM grupo where idEstudios=?", [id])
        .then(
          (data) => {
            console.log('entro en el select all grupo');
            let arrayGrupo = [];
            if (data.rows.length > 0) {
              for (var i = 0; i < data.rows.length; i++) {
                arrayGrupo.push({
                  idGrupo: data.rows.item(i).idGrupo,
                  nombre: data.rows.item(i).nombre,
                });
                // this.estudios = data.rows.item(i).nombre;
              }
              this.grupo = arrayGrupo;
              console.log(arrayGrupo);
              resolve(arrayGrupo);
            }
            this.router.navigateByUrl('/grupo');
          })
        .catch((error) => {
          console.log('error al leer all grupo ', error);
          reject(error);
        }
        );
    });
  }

  GetAllMateriaSQL(idGrupo) {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM materia WHERE idMateria IN (' +
        'SELECT idMateria FROM materiahoraclase WHERE idHoraClase IN(' +
        'SELECT idHoraClase FROM horaClase WHERE idDiaClase IN(SELECT idDiaClase FROM diaClase WHERE idGrupo=?)));',
        [idGrupo])
        .then(
          (data) => {
            console.log('entro en el select all horario');
            const arrayClase = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayClase.push({
                  idMateria: data.rows.item(i).idMateria,
                  nombre: data.rows.item(i).nombre,
                  completo: data.rows.item(i).completo,
                });
              }
              this.asignaturas = arrayClase;
              console.log(arrayClase);
              resolve(arrayClase);
            }
            this.router.navigateByUrl('/horario');
          })
        .catch((error) => {
          console.log('error al leer all horario ', error);
          reject(error);
        }
        );
    });
  }

  GetOneMateriaSQL(idMateria) {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM materia WHERE idMateria =?', [idMateria])
        .then(
          (data) => {
            console.log('entro en el select One Materia');
            const arrayClase = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayClase.push({
                  idMateria: data.rows.item(i).idMateria,
                  nombre: data.rows.item(i).nombre,
                  completo: data.rows.item(i).completo,
                });
              }
              console.log(arrayClase);
              resolve(arrayClase);
            }
          })
        .catch((error) => {
          console.log('error al leer all OneMateria ', error);
          reject(error);
        }
        );
    });
  }

  GetMateria(idHoraClase) {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM materiahoraclase WHERE idHoraClase=?', [idHoraClase])
        .then(
          (data) => {
            // console.log('entro en el select all idMateria');
            const arrayHorasSemana = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayHorasSemana.push({
                  idmatsem: data.rows.item(i).idmatsem,
                  idHoraClase: data.rows.item(i).idHoraClase,
                  idMateria: data.rows.item(i).idMateria,
                });
              }
              console.log(arrayHorasSemana);
              resolve(arrayHorasSemana);
            }
          })
        .catch((error) => {
          console.log('error al leer all idMateria ', error);
          reject(error);
        }
        );
    });
  }

  //Variables GET SET
  public get estudios(): string[] {
    return this._estudios;
  }

  public set estudios(value: string[]) {
    this._estudios = value;
  }

  public get grupo(): string[] {
    return this._grupo;
  }

  public set grupo(value: string[]) {
    this._grupo = value;
  }

  public get asignaturas(): any[] {
    return this._asignaturas;
  }

  public set asignaturas(value: any[]) {
    this._asignaturas = value;
  }

  public get horas(): any[] {
    return this._horas;
  }

  public set horas(value: any[]) {
    this._horas = value;
  }

  public get semana(): any[] {
    return this._semana;
  }

  public set semana(value: any[]) {
    this._semana = value;
  }

  public get horario(): Horario {
    return this._horario;
  }

  public set horario(value: Horario) {
    this._horario = value;
  }



}
