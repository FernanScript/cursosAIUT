import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'America' | 'Europe' | 'Africa' | 'Asia' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries : Country[] = [];
  public regions : Region[] = ['America','Europe', 'Africa', 'Asia', 'Oceania'];
  public selectedRegion ?: Region;

  constructor( private countriesService:CountriesService ) {}

  searchByRegion(term:Region):void {
    this.selectedRegion = term;

    this.countriesService.searchRegion(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }
}
