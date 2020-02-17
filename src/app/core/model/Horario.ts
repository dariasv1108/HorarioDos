import { MateriaHoras } from './MateriaHora';
export class Horario {
    private _grupo: string;
    private _esudios: string;
    private _cuadrante: MateriaHoras[][];




    constructor(grupo: string, esudios: string, cuadrante: MateriaHoras[][]) {
        this.grupo = grupo;
        this.esudios = esudios;
        this.cuadrante = cuadrante;
    }


    /**
     * Getter grupo
     * @return {string}
     */
    public get grupo(): string {
        return this._grupo;
    }

    /**
     * Getter esudios
     * @return {string}
     */
    public get esudios(): string {
        return this._esudios;
    }


    /**
     * Setter grupo
     * @param {string} value
     */
    public set grupo(value: string) {
        this._grupo = value;
    }

    /**
     * Setter esudios
     * @param {string} value
     */
    public set esudios(value: string) {
        this._esudios = value;
    }


    /**
     * Getter cuadrante
     * @return {MateriaHoras[][]}
     */
	public get cuadrante(): MateriaHoras[][] {
		return this._cuadrante;
	}

    /**
     * Setter cuadrante
     * @param {MateriaHoras[][]} value
     */
	public set cuadrante(value: MateriaHoras[][]) {
		this._cuadrante = value;
	}


}
