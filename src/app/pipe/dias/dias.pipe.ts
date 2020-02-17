import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dias'
})
export class DiasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    let retorno = 'festivo';
    if (value >= 0 && value < dias.length) { retorno = dias[value]; }
    return retorno;
  }

}
