import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porterStatus'
})
export class PorterStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 1) {
      return "上班中";
    } else {
      return "未上班";
    }
  }

}
