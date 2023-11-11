import { Component } from '@angular/core';
import { AllCountriesApiService } from '../services/all-countries-api.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent {
  
  constructor(private apiService: AllCountriesApiService){}
  countries = [
    {name: 'benjamin1'},
    {name: 'benjamin2'},
    {name: 'benjamin3'},
    {name: 'benjamin4'},
    {name: 'benjamin5'},
    {name: 'benjamin6'},
  ]
  pullAllCountries(){
    this.apiService.getAllCountries().subscribe((res:any)=>{})
  }
}
