import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { CountryfilterPipe } from './pipes/countryfilter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    CountryfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
