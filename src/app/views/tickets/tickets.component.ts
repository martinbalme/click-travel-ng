import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClickTravelService } from 'src/app/click-travel/click-travel.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private travelService: ClickTravelService) { }
  tickets: Ticket[];

  ngOnInit(): void {
    this.getTickets();
  }

  private getTickets(): void {
    this.route.params.subscribe(routeParams => {
      this.travelService.getTickets(routeParams.id).subscribe(value => {
        this.tickets = value;
        console.log(value);
      });
    });
  }
}
