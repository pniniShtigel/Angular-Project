import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zman',
  standalone: true
})
export class ZmanPipe implements PipeTransform {

  transform(minutes: number | undefined): string {
    if (typeof minutes !== 'number') {
      return '';
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours} : ${remainingMinutes}`;
  }
}
