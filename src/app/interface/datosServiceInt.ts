import { Horario } from '../core/model/Horario';
import { MateriaHoras } from '../core/model/MateriaHora';

export interface DatosServiciosInt {
    getEsudios(): string[];
    getGrupos(estudio: string): string[];
    getHorario(grupo: string): Horario;
    getDescripcion(materia: MateriaHoras): string[];
}
