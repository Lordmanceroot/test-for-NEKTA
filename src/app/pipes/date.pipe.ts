import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'exchangeDate'
})
export class DatePipe implements PipeTransform {
  transform(date: string): string {
    const currentDate = new Date(+date * 1000).toLocaleDateString()
    const currentTime = new Date(+date * 1000).toLocaleTimeString()
    return ` Дата: ${currentDate} | Время: ${currentTime}`
  }
}
