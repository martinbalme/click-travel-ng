import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private client: HttpClient) { }

  public getDestinations(): Observable<Destination[]> {
    return this.client.get<Destination[]>(environment.apiBaseUrl + '/destinations');
  }
}
