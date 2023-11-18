import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss']
})
export class SingleCountryComponent implements OnDestroy, OnInit{
  constructor(private router:Router, public dataService: DataService){}

  ngOnDestroy(){
    
    // console.log('country component destroyed');
    // this.router.navigate(['home'])
  }
  ngOnInit(): void {
    console.log('country component loaded');
    if (!this.dataService.country) {
      this.router.navigate(['home'])
    }
  }
}
