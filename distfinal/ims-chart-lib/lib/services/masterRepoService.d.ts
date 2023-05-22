import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class MasterService {
    private router;
    http: HttpClient;
    apiUrl: string;
    dailyWeekly: any;
    CategoryNameList: any[];
    salesStatchart: any[];
    coverreportchart: any[];
    colspanVal: string;
    constructor(router: Router, http: HttpClient);
    nullToZeroConverter(value: any): number;
    DashboardData(): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MasterService>;
}
