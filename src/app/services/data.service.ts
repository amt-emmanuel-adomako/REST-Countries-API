import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  country:any 
  neighbourhingCountries:any = []
  constructor() { }
}
