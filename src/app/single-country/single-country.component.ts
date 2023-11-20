import { Component,  OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss']
})
export class SingleCountryComponent implements OnInit{
  currency:any ;
  nativeName:any;
  constructor(private router:Router, public dataService: DataService){}

  ngOnDestroy(){
   this.dataService.neighbourhingCountries = []
  }
  ngOnInit(): void {
    console.log('country component loaded');
    console.log(this.dataService.country);
    // console.log(this.dataService.country.name.nativeName[`${Object.keys(this.dataService.country.name.nativeName).pop()}`].common);
    // console.log(Object.keys(this.dataService.country.name.nativeName).pop());
    this.currency = this.dataService.country.currencies[Object.keys(this.dataService.country.currencies)[0]].name
    this.nativeName = this.dataService.country.name.nativeName[`${Object.keys(this.dataService.country.name.nativeName).pop()}`].common
    if (!this.dataService.country) {
      this.router.navigate(['home'])
    }
  }
}
