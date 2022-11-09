import { ModuleWithComponentFactories, Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: Date): string {
    let dateOut: moment.Moment = moment(date, "HH,mm");
    return dateOut.format("HH:mm");
    
  }

}
