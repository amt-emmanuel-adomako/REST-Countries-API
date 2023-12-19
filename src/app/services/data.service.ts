import { Injectable } from '@angular/core';

interface countriesData{
name:any
tld: [],
cca2: string,
ccn3: string,
cca3: string,
independent: boolean,
status: string,
unMember: boolean,
currencies: object,
idd: object,
capital: [],
altSpellings: [],
region: string,
subregion: string,
languages: object,
translations: object,
latlng: [],
landlocked: boolean,
area: number,
demonyms: object,
flag: string,
maps: object,
population: number,
car: object,
timezones: [],
continents: [],
flags: object,
coatOfArms: object,
startOfWeek: string,
capitalInfo: object,
postalCode: object

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  country:any 
  countries:countriesData[]=[]
  fill = '#848484'
  doesNotExist = {exist:false, term:''}
  neighbourhingCountries:any = []
  liteDarkBody = 'lite-mode container-fluid'
  singleLiteDarkBody = 'lite-mode container-fluid body-padding'
  liteDarkCard = 'col-md-3 col-sm-12 country-card-lite p-0'
  // liteDarkCard = 'country-card-lite p-0'
  liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
  liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
  liteDarkSelect = 'sort-container-lite select-shift-right col-sm-6'
  lightDarkBool = true;
  constructor() { }

  changeTheme(){
    if (this.lightDarkBool) {
      this.liteDarkBody = 'dark-mode'
      this.singleLiteDarkBody = 'dark-mode container-fluid body-padding'
      this.liteDarkCard = 'col-md-3 col-sm-12 country-card-dark p-0'
      // this.liteDarkCard = 'country-card-dark p-0'
      this.liteDarkNavbar = 'nav-bar-1-dark align-items-center mb-48'
      this.liteDarkFilter = 'filter-container-dark d-flex col-sm-6'
      this.liteDarkSelect = 'sort-container-dark select-shift-right col-sm-6'
      this.lightDarkBool = !this.lightDarkBool;
      this.fill = '#fff'
    }
    else{
      this.liteDarkBody = 'lite-mode'
      this.singleLiteDarkBody = 'lite-mode container-fluid body-padding'
      this.liteDarkCard = 'col-md-4 col-sm-12 country-card-lite p-0'
      // this.liteDarkCard = 'country-card-lite p-0'
      this.liteDarkNavbar = 'nav-bar-1-lite align-items-center mb-48'
      this.liteDarkFilter = 'filter-container-lite d-flex col-sm-6'
      this.liteDarkSelect = 'sort-container-lite select-shift-right col-sm-6'
      this.lightDarkBool = !this.lightDarkBool;
      this.fill = '#848484'
    }
  }
}
