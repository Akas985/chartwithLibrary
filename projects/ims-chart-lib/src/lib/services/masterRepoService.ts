import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environment';





@Injectable({
  providedIn: 'root'
})
export class MasterService {
    // apiUrl = 'http://localhost:3000';
    apiUrl: string='';
    dailyWeekly:any;
    CategoryNameList:any[]=[];
    salesStatchart:any[]=[]
    coverreportchart:any[]=[]
    colspanVal!:string;
  constructor(private router: Router,  public http: HttpClient,  ) { 
    //  this.apiUrl = localStorage.getItem("ims-chartApiUrl") ?? environment.baseUrl
  }

  nullToZeroConverter(value:any) {
    if (
      value === undefined ||
      value == null ||
      value === '' ||
      value === 'Infinity' ||
      value === 'NaN' ||
      isNaN(parseFloat(value))
    ) {
      return 0;
    }
    return parseFloat(value);
  }

  DashboardData( ) {

    return this.http.get(this.apiUrl + `/charts`);

}


}
