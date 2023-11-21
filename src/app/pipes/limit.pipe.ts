import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(countryName: string, limit:number) {
    if (countryName.length > 20) {
      return countryName.substring(0, limit - 2) + '...';
    }
    return countryName;
  }

}
