import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missionStatus'
})
export class MissionStatusPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value == 1) {
      return "未派遣";
    } else if (value == 2) {
      return "未開始";
    } else if (value == 3) {
      return "進行中";
    } else {
      return "已完成";
    }
  }

}
