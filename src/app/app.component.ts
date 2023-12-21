import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'REST-Countries-API';
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    document.body.classList.forEach(item=>{
      document.body.classList.remove(item)
    })
    document.body.classList.add(this.dataService.liteDarkBody.split(" ")[0])
  }
}
