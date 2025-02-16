import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordErrorFilter'
})
export class PasswordErrorFilterPipe implements PipeTransform {

  transform(value: Error[], error: string): boolean {
    if (!value || value.length === 0) {
      return false;
    }
    return value.some(e => e.name === error);
  }

}
