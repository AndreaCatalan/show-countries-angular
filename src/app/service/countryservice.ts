import { Observable } from "rxjs";
import { Country } from "../model/country";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CountryService {
    
    private countriesUrl: string = 'http://localhost:18080/api';

    constructor(private http: HttpClient) { }

    
    public getCountry(id: number): Observable<Country> {
        return this.http.get<Country>(`${this.countriesUrl}/show-country/${id}`);
    }

    
    public getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.countriesUrl);
    }
}
