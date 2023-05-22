import { Component, ViewChild } from '@angular/core';
import { MasterService } from 'imsChartTheme';
// import { ImsChartLibComponent, MasterService, imsCharts } from 'dist/ims-chart-lib';
// import { environment } from 'dist/ims-chart-lib/lib/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private chartService: MasterService){
    this.chartService.apiUrl = 'http://localhost:3000'
  }
  title = 'test';
}
