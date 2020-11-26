import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonDestinationComponent } from './shared/button-destination/button-destination.component';
import { TicketsComponent } from './views/tickets/tickets.component';
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ButtonDestinationComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
