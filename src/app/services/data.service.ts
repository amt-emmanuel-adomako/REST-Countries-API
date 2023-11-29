import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  country:any 
  countries:any
  neighbourhingCountries:any = []
  liteDarkBody = 'lite-mode container-fluid'
  singleLiteDarkBody = 'lite-mode container-fluid body-padding'
  liteDarkCard = 'col-md-4 col-sm-12 country-card-lite p-0'
  liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
  liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
  liteDarkSelect = 'sort-container-lite select-shift-right col-sm-6'
  lightDarkBool = true;
  constructor() { }

  changeTheme(){
    if (this.lightDarkBool) {
      this.liteDarkBody = 'dark-mode'
      this.singleLiteDarkBody = 'dark-mode container-fluid body-padding'
      this.liteDarkCard = 'col-md-4 col-sm-12 country-card-dark p-0'
      this.liteDarkNavbar = 'nav-bar-1-dark align-items-center mb-48'
      this.liteDarkFilter = 'filter-container-dark d-flex col-sm-6'
      this.liteDarkSelect = 'sort-container-dark select-shift-right col-sm-6'
      this.lightDarkBool = !this.lightDarkBool;
    }
    else{
      this.liteDarkBody = 'lite-mode'
      this.singleLiteDarkBody = 'lite-mode container-fluid body-padding'
      this.liteDarkCard = 'col-md-4 col-sm-12 country-card-lite p-0'
      this.liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
      this.liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
      this.liteDarkSelect = 'sort-container-lite select-shift-right col-sm-6'
      this.lightDarkBool = !this.lightDarkBool;
    }
  }
}
