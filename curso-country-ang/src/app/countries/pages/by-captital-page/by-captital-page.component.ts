import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-captital-page',
  templateUrl: './by-captital-page.component.html',
  styles: [
  ]
})
export class ByCaptitalPageComponent {

  public countries:Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCapital(term:string):void {
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
