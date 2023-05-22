import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclerationMasterService, ImsChartLibComponent, ImsChartLibModule, ImsChartLibService, MasterService } from 'dist/ims-chart-lib';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    CommonModule ,
    BrowserModule,
    AppRoutingModule,
    ImsChartLibModule,
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
