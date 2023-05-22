import { imsCharts } from './charts/ims-chart.component';
import { MasterService } from './services/masterRepoService';
import { Router } from '@angular/router';
import { DeclerationMasterService } from './services/decleration-master.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class ImsChartLibComponent {
    http: HttpClient;
    private router;
    masterService: MasterService;
    declerationService: DeclerationMasterService;
    chartComp: imsCharts;
    newData: any[];
    charttype: string;
    dataforloop: any[];
    callChartSelector: boolean;
    option1: {
        responsive: boolean;
        maintainAspectRatio: boolean;
        plugins: {
            legend: {
                display: boolean;
            };
        };
        scales: {
            x: {
                grid: {
                    display: boolean;
                };
            };
        };
    };
    chart: any;
    constructor(http: HttpClient, router: Router, masterService: MasterService, declerationService: DeclerationMasterService);
    ChooseColSpan(value: any): void;
    getChartData(index: number): any;
    dashboardmaindata(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImsChartLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImsChartLibComponent, "lib-imsChartLib", never, {}, {}, never, never, false, never>;
}
