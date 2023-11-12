import { Component, OnInit } from '@angular/core';
import { AllCountriesApiService } from '../services/all-countries-api.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit{
  
  constructor(private apiService: AllCountriesApiService){}
  countries:any
  regions:any = [ ]
  pullAllCountries(){
   this.apiService.getAllCountries().subscribe((res:any)=>{
    res.forEach((element:any )=> {
      element.population= element.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      if (!this.regions.includes(element.region)) {
        this.regions.push(element.region)
      }
    });
    this.countries = res
   })
  }

  ngOnInit(){
    this.pullAllCountries()
  }
}
