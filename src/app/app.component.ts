import { Component } from '@angular/core';
import { ClickTravelService } from './click-travel/click-travel.service';
import { Destination } from './models/destination';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your dream destination...';

  destinations: Destination[];
  constructor(private travelService: ClickTravelService) {
    this.getDestinationsFiltered();
  }

  public getDestinationsFiltered(): void {
    this.travelService.getDestinations().pipe(
      map((dests: Destination[]) => dests.filter(
        (dest: Destination) => dest.isDreamDestination === true
      ))
    ).subscribe(dests => {
      this.destinations = dests;
    });
  }
}
