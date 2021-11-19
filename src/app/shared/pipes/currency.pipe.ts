import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  pure: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return `${value} BGN`;
  }

}
