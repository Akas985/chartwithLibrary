import { OnInit, AfterViewInit, SimpleChanges } from '@angular/core';
import { MasterService } from '../services/masterRepoService';
import { DeclerationMasterService } from '../services/decleration-master.service';
import { ChartData } from '../common/Classes/chartData.class';
import * as i0 from "@angular/core";
export declare class imsCharts implements OnInit, AfterViewInit {
    masterService: MasterService;
    declerationService: DeclerationMasterService;
    isVisible: boolean;
    datamode: any;
    ChangesValue: any;
    dashboardData: any[];
    myinputMsg: string;
    chartname: string;
    chartType: string;
    colSpan: string;
    canvasId: number;
    index: number;
    chardata: ChartData[];
    chart: any;
    Labels: string[];
    Yaxis: string[];
    Xaxis: string[];
    colors: string[];
    options: any;
    barLine?: number;
    chartData: any[];
    indexData: any[];
    chartTypeData: any[];
    colSpanData: any[];
    constructor(masterService: MasterService, declerationService: DeclerationMasterService);
    ngOnInit(): void;
    distroyChart(): void;
    ChooseChartType(value: any): void;
    ChooseColSpan(value: any): void;
    showhide(): void;
    reload(): void;
    createChart(chexkdataObj: any, canvasId: string, chartType: string): void;
    mapDataForBar(chartdata: ChartData[]): {
        type: string;
        data: {
            labels: string[];
            datasets: any[];
        };
    };
    mapDataForLine(chartdata: ChartData[], charttype?: string): {
        type: string;
        data: {
            labels: string[];
            datasets: any[];
        };
        options: any;
    };
    mapDataForPie(chartdata: ChartData[]): {
        type: string;
        data: {
            labels: string[];
            datasets: any[];
        };
    };
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    getchartdataAId(): void;
    getCanvaId(canvaid: string): string;
    getCanvasChrtType(getChartype: string): string;
    getColSpanValue(ColSpanValue: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<imsCharts, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<imsCharts, "ims-charts", never, { "myinputMsg": "myinputMsg"; "chartname": "chartname"; "chartType": "ChartType"; "colSpan": "colSpan"; "canvasId": "canvasId"; "index": "index"; "chardata": "chartData"; "options": "options"; "barLine": "barLine"; }, {}, never, never, false, never>;
}
