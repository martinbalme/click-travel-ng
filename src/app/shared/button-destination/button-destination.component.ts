import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-button-destination',
  templateUrl: './button-destination.component.html',
  styleUrls: ['./button-destination.component.scss']
})
export class ButtonDestinationComponent implements OnInit {

  constructor() { }
  @Input() destination: Destination;

  ngOnInit(): void {
  }
}
