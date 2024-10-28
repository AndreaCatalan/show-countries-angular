import { Country } from "../model/country";
import { Component, OnInit } from "@angular/core";
import { CountryService } from "../service/countryservice";
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
    selector: 'app-show-countries',
    standalone: true, // Make it standalone
    templateUrl: './show-countries.component.html',
    styleUrls: ['./show-countries.component.css'],
    imports: [CommonModule] // Import CommonModule here
})
export class ShowCountriesComponent implements OnInit {
    countries: Country[] = [];

    constructor(private countryService: CountryService) {}

    ngOnInit(): void {
        this.countryService.getCountries().subscribe((data: Country[]) => {
            this.countries = data;
        });
    }
}
