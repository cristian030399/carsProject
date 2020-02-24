import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPropietario'
})
export class NoPropietarioPipe implements PipeTransform {

  transform(propietario: any): string {
    if (propietario == null) {
      return 'No tiene propietario';
    } else {
      return propietario;
    }
  }

}
