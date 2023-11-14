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
  liteDarkBody = 'lite-mode'
  liteDarkCard = 'col-md-4 col-sm-12 country-card-lite p-0'
  liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
  liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
  lightDarkBool = false;
  searchObjects(objects:any, searchTerm:string) {
    return objects.filter((object:any) => {
      return Object.keys(object).some(key => {
        return object[key].toString().toLowerCase().includes(searchTerm.toLowerCase()); 
      });
    });
  }


  
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
  changeTheme(){
    if (this.lightDarkBool) {
      this.liteDarkBody = 'dark-mode'
      this.liteDarkCard = 'col-md-4 col-sm-12 country-card-dark p-0'
      this.liteDarkNavbar = 'nav-bar-1-dark align-items-center mb-48'
      this.liteDarkFilter = 'filter-container-dark d-flex col-sm-6'
      this.lightDarkBool = !this.lightDarkBool;
    }
    else{
      this.liteDarkBody = 'lite-mode'
      this.liteDarkCard = 'col-md-4 col-sm-12 country-card-lite p-0'
      this.liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
      this.liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
      this.lightDarkBool = !this.lightDarkBool;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length) {
      this.countries = this.searchObjects(this.countries, filterValue.trim().toLowerCase());
    }
    else{
      this.pullAllCountries()
    }
    console.log(this.countries.length);
    
  }

  ngOnInit(){
    this.pullAllCountries()
  }
}
