import { Country } from "./country";

export interface CacheStore {
  byCapital : TermCountries;
  byCountries : TermCountries;

}

export interface TermCountries {
  term : string;
  countries : Country[]
}
