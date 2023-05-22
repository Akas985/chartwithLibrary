


import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { imsCharts } from './charts/ims-chart.component';
import { MasterService } from './services/masterRepoService';
import { Router } from '@angular/router';
import { DeclerationMasterService } from './services/decleration-master.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'lib-imsChartTheme',
  templateUrl: './ims-chart-theme.component.html',
  styleUrls: ['./style.scss'],
  encapsulation: ViewEncapsulation.None,
})
// export class ImsChartLibComponent {

// }


export class ImsChartThemeComponent {

  @ViewChild('imschart') chartComp!: imsCharts ;
  newData: any[] = [];
  charttype!:string;
  dataforloop:any[]=[];
  callChartSelector:boolean=false;


  option1 = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },

    }


  }

  public chart: any;
  
  constructor( public http: HttpClient, private router: Router, public masterService: MasterService, public declerationService: DeclerationMasterService,) {

    this.dashboardmaindata();

  }

 
  ChooseColSpan(value:any){
 this.declerationService.ColSpanValue= value.target.value
 console.log('changecol', this.declerationService.ColSpanValue)
//  this.chartComp.ChooseColSpan();

  }
 
  getChartData(index: number): any {
     return this.dataforloop[index+1];
  }

  dashboardmaindata() {
    this.masterService.DashboardData().subscribe((mainData: any) => {
      this.dataforloop = mainData;
      
      this.callChartSelector=true;

      console.log('this.dataforloop', this.dataforloop,this.callChartSelector);

      // DATA CONVERSION
      let getccdata: any[] = [];
      mainData.map((p: any) => {
        getccdata.push(p.ccdata);
        // this.declerationService.ColSpanValue=(p.colSpan)
      });
      console.log('this.getccdata', getccdata);
  
      getccdata.forEach((element: any) => {
        for (let i of element) {
            i.value = i.STOCK;
            i.group = i.ACNAME;
            i.label = i.label;
            i.category = i.category;
        
        }
        this.declerationService.Dataforchart.push(element);
      });
  
      console.log('this.Dataforchart', this.declerationService.Dataforchart);
    });
  }
  






  






}


