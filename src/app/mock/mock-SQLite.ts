import { DatosServiciosInt } from './../interface/datosServiceInt';
import { MateriaHoras } from '../core/model/MateriaHora';
import { Horario } from '../core/model/Horario';
export class SQLiteMock implements DatosServiciosInt {

    private estudios = ['ESO', 'DIV', 'BAC', 'PCPI', 'GM', 'GS'];
    private grupos = ['1inf', '1adm', '2inf', '2and'];
    private descripcion = [
        'Desarrollo de interfaces',
        'Acceso a datos',
        'Empresa e iniciativa emprendedora',
        'Programación multimedia y dispositivos móviles',
        'Programación de servicios y procesos',
        'Sistemas de gestión empresarial'
    ];
    private materias = [
        [
            new MateriaHoras(['DEDIN', 'EIE']),
            new MateriaHoras(['DEDIN', 'ACADT']),
            new MateriaHoras(['ACADT']),
            new MateriaHoras(['EIE']),
            new MateriaHoras(['PMYDM', 'PRSYP', 'SIGEE'])
        ],
        [
            new MateriaHoras(['DEDIN', 'EIE']),
            new MateriaHoras(['DEDIN', 'ACADT']),
            new MateriaHoras(['ACADT']),
            new MateriaHoras(['EIE']),
            new MateriaHoras(['PMYDM', 'PRSYP', 'SIGEE'])
        ],
        [
            new MateriaHoras(['DEDIN', 'EIE']),
            new MateriaHoras(['DEDIN', 'ACADT']),
            new MateriaHoras(['ACADT']),
            new MateriaHoras(['EIE']),
            new MateriaHoras(['PMYDM', 'PRSYP', 'SIGEE'])
        ],
        [
            new MateriaHoras(['DEDIN', 'EIE']),
            new MateriaHoras(['DEDIN', 'ACADT']),
            new MateriaHoras(['ACADT']),
            new MateriaHoras(['EIE']),
            new MateriaHoras(['PMYDM', 'PRSYP', 'SIGEE'])
        ],
        [
            new MateriaHoras(['DEDIN', 'EIE']),
            new MateriaHoras(['DEDIN', 'ACADT']),
            new MateriaHoras(['ACADT']),
            new MateriaHoras(['EIE']),
            new MateriaHoras(['PMYDM', 'PRSYP', 'SIGEE'])
        ],
        [
            new MateriaHoras(['DEDIN', 'EIE']),
            new MateriaHoras(['DEDIN', 'ACADT']),
            new MateriaHoras(['ACADT']),
            new MateriaHoras(['EIE']),
            new MateriaHoras(['PMYDM', 'PRSYP', 'SIGEE'])
        ],

    ];


    constructor() {
    }


    getEsudios(): string[] {
        return this.estudios;
    }
    getGrupos(estudio: string): string[] {
        return this.grupos;
    }
    getHorario(grupo: string): Horario {
        return new Horario(this.grupos[2], this.estudios[5], this.materias);
    }
    getDescripcion(materia: MateriaHoras): string[] {
        return this.descripcion;
    }


}