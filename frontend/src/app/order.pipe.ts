
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { sortBy } from 'lodash';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(list: Object[], params: string): Object[] {
    if (params.length){
      return list.sort(sortBy(params));
    }
    return list;
  }

}
