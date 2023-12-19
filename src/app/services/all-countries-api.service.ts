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
}
