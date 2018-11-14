import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  toggleProviders: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  
  showProviders(){
    this.toggleProviders = !this.toggleProviders;
  }
}
