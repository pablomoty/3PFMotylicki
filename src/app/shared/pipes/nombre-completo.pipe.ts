import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(user: User, ...args: unknown[]): unknown {

    const isUppercase = args[0] === 'uppercase';
    const fullName = `${user.name} ${user.surname}`;
    return isUppercase ? fullName.toUpperCase() : fullName;
  }

}
