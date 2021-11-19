import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CSV',
  pure: true
})
export class CSVPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string {
    if (!!value) {
      return value.join(', ');
    } else {
      return '';
    }
  }

}
