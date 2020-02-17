import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grupo'
})
export class GrupoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let retorno = 'No encontrado grupo';
    if (value >= 0 && value < args.length) { retorno = args[value]; }
    return retorno;
  }

}
