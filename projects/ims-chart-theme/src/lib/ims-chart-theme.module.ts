import { ModuleWithProviders, NgModule } from '@angular/core';
import { ImsChartThemeComponent } from './ims-chart-theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { imsCharts } from './charts/ims-chart.component';

import { MasterService } from './services/masterRepoService';
import { DeclerationMasterService } from './services/decleration-master.service';


@NgModule({
  declarations: [
    ImsChartThemeComponent,
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
    ImsChartThemeComponent, imsCharts
  ],
  providers:[MasterService, HttpClient, DeclerationMasterService]
})


export class ImsChartThemeModule {
  static forRoot():ModuleWithProviders<ImsChartThemeModule>{
    return {
      ngModule:ImsChartThemeModule,
      
    }
  }
}
