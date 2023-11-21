import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'countryfilter'
})

export class CountryfilterPipe implements PipeTransform {

  transform(values: any, searchTerm:string) {
  if(searchTerm === ''){
    return values
  }
  const resultArray:any =[]
  for (const item of values) {
    if (item.name.common.toLowerCase().includes(searchTerm)) {
      resultArray.push(item)
    }
    
  }
  return resultArray
  }

}
