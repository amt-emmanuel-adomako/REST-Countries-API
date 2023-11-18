import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { NgModule } from '@angular/core';
import { SingleCountryComponent } from './single-country/single-country.component';

const routes: Routes = [
  {path:'home', component:AllCountriesComponent},
  {path:'country/:name', component:SingleCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
