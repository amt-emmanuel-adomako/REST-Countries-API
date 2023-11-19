import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllCountriesApiService {
  all_countries_api="https://restcountries.com/v3.1/all"
  constructor(private http: HttpClient) { }

  getAllCountries(){
    return this.http.get(this.all_countries_api)
  }

  getNeighboringCountries(cca3:any){
    return this.http.get(`https://restcountries.com/v3.1/alpha/${cca3}?fields=name`)
  }
}
