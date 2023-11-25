import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'countryfilter'
})

export class CountryfilterPipe implements PipeTransform {

  transform(values: any, searchTerm:string, continent:string) {
    searchTerm = searchTerm.toLowerCase()
    console.log(continent);
    const resultArray:any =[]
    
  if(searchTerm === '' && continent === 'Filter by Region'){
    return values
  }
  // if(searchTerm.length && continent === 'Filter by Region'){
  //   for (const item of values) {
  //     if (item.name.common.toLowerCase().includes(searchTerm)) {
  //       resultArray.push(item)
  //     }
  //   }
    
  // }
  if(searchTerm.length){
    if (continent != 'Filter by Region') {
      for (const item of values) {
        if (item.region.includes(continent)&&item.name.common.toLowerCase().includes(searchTerm)) {
          resultArray.push(item)
        }
      }
    } else {
      for (const item of values) {
        if (item.name.common.toLowerCase().includes(searchTerm)) {
          resultArray.push(item)
        }
      }
    }
  }


  if(continent != 'Filter by Region'){
    if (searchTerm.length) {
      for (const item of values) {
        if (item.region.toLowerCase().includes(continent)&&item.name.common.toLowerCase().includes(searchTerm)) {
          resultArray.push(item)
        }
      }
    } else {
      for (const item of values) {
        if (item.region.includes(continent)) {
          resultArray.push(item)
        }
      }
    }
  }
  return resultArray
  }

}
