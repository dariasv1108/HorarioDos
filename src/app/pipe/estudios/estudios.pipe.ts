import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estudios'
})
export class EstudiosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let retorno = 'No encontrado estudio';
    if (value >= 0 && value < args.length) { retorno = args[value]; }
    return retorno;
  }

}
