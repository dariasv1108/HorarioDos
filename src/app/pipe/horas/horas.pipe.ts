import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horas'
})
export class HorasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const horas = ['8:10h - 9:05h', '9:05h - 10:00h', '10:00h - 10:55h',
     '11:25h - 12:20h', '12:20h - 13:15h', '13:15h - 14:10h'];
    let retorno = '';
    if (value >= 0 && value < horas.length) { retorno = horas[value]; }
    return retorno;
  }

}
