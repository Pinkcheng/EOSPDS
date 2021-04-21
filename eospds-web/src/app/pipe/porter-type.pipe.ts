import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porterType'
})
export class PorterTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 1) {
      return "全院";
    } else {
      return "駐點";
    }
  }

}
