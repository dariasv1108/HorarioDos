export class MateriaHoras {
    private _materia: string[];
  length: number;


    constructor(materia: string[]) {
        this._materia = materia;
    }

    /**
     * Getter materia
     * @return {string[]}
     */
    public get materia(): string[] {
        return this._materia;
    }

    /**
     * Setter materia
     * @param {string[]} value
     */
    public set materia(value: string[]) {
        this._materia = value;
    }

}