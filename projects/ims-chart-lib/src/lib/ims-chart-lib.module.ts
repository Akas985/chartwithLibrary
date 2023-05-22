import { ModuleWithProviders, NgModule } from '@angular/core';
import { ImsChartLibComponent } from './ims-chart-lib.component';
import { MasterService } from './services/masterRepoService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeclerationMasterService } from './services/decleration-master.service';
import { imsCharts } from './charts/ims-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ImsChartLibComponent,
    imsCharts
   

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule
    
  ],
  exports: [
    ImsChartLibComponent, imsCharts
  ],

  providers:[MasterService, HttpClient, DeclerationMasterService]
})


export class ImsChartLibModule {
  static forRoot():ModuleWithProviders<ImsChartLibModule>{
    return {
      ngModule:ImsChartLibModule,
      
    }
  }
}
