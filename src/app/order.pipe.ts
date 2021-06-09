import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const firstDigit = value % 10;
    let prefix = "th";
    switch (firstDigit) {
      case 1:
        prefix = "st"; break;
      case 2:
        prefix = "st"; break;
      case 3:
        prefix = "st"; break;
    }
    return value + prefix;
  }

}
