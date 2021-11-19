import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first',
  pure: true
})
export class FirstPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string {
    return value && value.length > 0 ? value[0] : '';
  }

}
