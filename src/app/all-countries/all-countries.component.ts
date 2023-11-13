import { Component, OnInit,  ElementRef } from '@angular/core';
import { AllCountriesApiService } from '../services/all-countries-api.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit{
  
  constructor(private apiService: AllCountriesApiService, private el: ElementRef){}
  countries:any
  regions:any = [ ]
  liteDarkBody = 'dark-mode'
  liteDarkCard = 'col-md-4 col-sm-12 country-card-dark p-0'
  liteDarkNavbar = 'nav-bar-1-dark align-items-center mb-48'
  liteDarkFilter = 'filter-container-dark d-flex col-sm-6'
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
  lightDarkMode(){
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.countries.filter = filterValue.trim().toLowerCase();
    // (objects, searchTerm) {
      this.countries=  this.countries.filter((object:any) => {
        return Object.keys(object).some(key => {
          return object[key].toString().toLowerCase().includes(filterValue.toLowerCase()); 
        });
      });
    console.log(this.countries.length)
  }

  ngOnInit(){
    this.pullAllCountries()
  }
}
