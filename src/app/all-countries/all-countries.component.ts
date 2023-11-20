import { Component, ElementRef, OnInit } from '@angular/core';
import { AllCountriesApiService } from '../services/all-countries-api.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit{
  
  country:any 
  neighbourhingCountries:any = []
  liteDarkBody = 'lite-mode'
  liteDarkCard = 'col-md-4 col-sm-12 country-card-dark p-0'
  liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
  liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
  lightDarkBool = true;
  searchString = ''
  constructor(
    private apiService: AllCountriesApiService, 
    private el: ElementRef , 
    private router:Router,
    public dataService: DataService
    ){}
  countries:any
  regions:any = [ ]
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
  
  goToCountry(country:any){
    console.log(country);
    
    this.dataService.country = country
    if (this.dataService.country.borders) {
      for (let i = 0; i < this.dataService.country.borders.length; i++) {
        this.apiService.getNeighboringCountries(this.dataService.country.borders[i]).subscribe((res:any)=>{
          this.dataService.neighbourhingCountries.push(res.name.common)
        })
      }
    }
    this.router.navigate(['country',country.name.common])
  }
  ngOnInit(){
    this.pullAllCountries()
  }
}
