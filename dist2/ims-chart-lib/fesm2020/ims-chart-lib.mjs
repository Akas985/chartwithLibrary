import * as i0 from '@angular/core';
import { Injectable, Component, Input, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import * as i2 from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as i1 from '@angular/router';
import * as i5 from '@angular/common';
import { formatDate, CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import * as i3 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

class ImsChartLibService {
    constructor() { }
}
ImsChartLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ImsChartLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
    baseUrl: 'http://localhost:3000'
};

class MasterService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.CategoryNameList = [];
        this.salesStatchart = [];
        this.coverreportchart = [];
        this.apiUrl = localStorage.getItem("ims-chartApiUrl") ?? environment.baseUrl;
    }
    nullToZeroConverter(value) {
        if (value === undefined ||
            value == null ||
            value === '' ||
            value === 'Infinity' ||
            value === 'NaN' ||
            isNaN(parseFloat(value))) {
            return 0;
        }
        return parseFloat(value);
    }
    DashboardData() {
        return this.http.get(this.apiUrl + `/charts`);
    }
}
MasterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasterService, deps: [{ token: i1.Router }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
MasterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.HttpClient }]; } });

class DeclerationMasterService {
    constructor() {
        this.Dataforchart = [];
        this.ColSpanValue = [];
        const today = new Date();
        this.Currdate = formatDate(today, "yyy-MM-dd", 'en-US');
    }
}
DeclerationMasterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DeclerationMasterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DeclerationMasterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DeclerationMasterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DeclerationMasterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class imsCharts {
    constructor(masterService, declerationService) {
        this.masterService = masterService;
        this.declerationService = declerationService;
        this.isVisible = false;
        this.dashboardData = [];
        this.chardata = [];
        this.Labels = [];
        this.Yaxis = [];
        this.Xaxis = [];
        this.colors = [];
        this.chartData = [];
        this.indexData = [];
        this.chartTypeData = [];
        this.colSpanData = [];
        Chart.register(...registerables);
        // this.chartType="doughnut"
    }
    ngOnInit() {
    }
    //   @HostListener('document:click', ['$event', '$event.target'])
    //     onClick(event: MouseEvent){
    //       this.isVisible=true;
    //     }
    distroyChart() {
        let iid = this.ChangesValue?.canvasId?.currentValue;
        var chart = Object.values(Chart.instances).filter((c) => c.canvas.id == iid).pop();
        chart?.destroy();
    }
    ChooseChartType(value) {
        this.chartType = value.target.value;
        this.getCanvasChrtType(this.chartType);
        this.reload();
    }
    ChooseColSpan(value) {
        const newValue = value.target.value;
        this.declerationService.ColSpanValue[this.index] = newValue;
        console.log('ccc', this.declerationService.ColSpanValue[this.index]);
        this.reload();
    }
    showhide() { }
    reload() {
        let iid = this.ChangesValue?.canvasId?.currentValue;
        let chartsddata = [];
        chartsddata = this.chartData[0];
        this.distroyChart();
        this.createChart(chartsddata, iid, this.chartType);
    }
    createChart(chexkdataObj, canvasId, chartType) {
        var data;
        let chexkdata = [];
        //  chexkdata.push(chexkdataObj);
        // console.log('chexkdata', chexkdata)
        if (chartType == 'bar' && chexkdataObj.length > 0) {
            data = this.mapDataForBar(chexkdataObj);
        }
        if (chartType == 'pie' || chartType == 'doughnut' && chexkdataObj.length > 0) {
            data = this.mapDataForPie(chexkdataObj);
        }
        if (chartType == 'line' && chexkdataObj.length > 0) {
            data = this.mapDataForLine(chexkdataObj, 'line');
        }
        //   if (window.myCharts != undefined )
        //   window.myCharts.destroy();
        // window.myCharts  = 
        var myChart = new Chart(`${canvasId}`, data);
        console.log('myChart', myChart);
        console.log('cdataid', window.myCharts);
    }
    mapDataForBar(chartdata) {
        var lbs = chartdata.filter((thing, i, data) => data.findIndex(t => t.group == thing.group) === i).map(x => x.group);
        var categories = chartdata.filter((thing, i, data) => data.findIndex(t => t.category == thing.category) === i);
        var categoryDataSets = [];
        categories.forEach(cat => {
            var catData = chartdata.filter(x => x.category == cat.category).map(y => y.value);
            var categorydata = {
                label: cat.category,
                data: catData,
                backgroundColor: cat.color
            };
            categoryDataSets.push(categorydata);
        });
        return {
            type: 'bar',
            data: {
                labels: lbs,
                datasets: categoryDataSets,
            }
        };
    }
    mapDataForLine(chartdata, charttype = 'line') {
        var lbs = chartdata.filter((thing, i, data) => data.findIndex(t => t.group == thing.group) === i).map(x => x.group);
        var categories = chartdata.filter((thing, i, data) => data.findIndex(t => t.category == thing.category) === i);
        var categoryDataSets = [];
        categories.forEach(cat => {
            var catData = chartdata.filter(x => x.category == cat.category).map(y => y.label);
            var categorydata = {
                label: 'last month',
                data: catData,
                backgroundColor: cat.color,
                tension: 0.3,
            };
            var catData2 = chartdata.filter(x => x.category == cat.category).map(y => y.value);
            var categorydata2 = {
                label: 'this month',
                data: catData2,
                backgroundColor: cat.color,
                tension: 0.3
            };
            categoryDataSets.push(categorydata);
            categoryDataSets.push(categorydata2);
        });
        return {
            type: charttype,
            data: {
                labels: lbs,
                datasets: categoryDataSets,
            },
            options: this.options
        };
    }
    mapDataForPie(chartdata) {
        var lbs = chartdata.filter((thing, i, data) => data.findIndex(t => t.group == thing.group) === i).map(x => x.group);
        // var categories= chartdata.filter((thing,i,data)=>data.findIndex(t=>t.category==thing.category)===i);
        var categoryDataSets = [];
        // categories.forEach(cat=>{
        var value = chartdata.map(y => y.value);
        var label = chartdata.map(y => y.label);
        var categorydata = {
            // label:label,
            data: value,
            // backgroundColor:cat.color
        };
        categoryDataSets.push(categorydata);
        // });
        return {
            type: this.chartType,
            data: {
                labels: lbs,
                datasets: categoryDataSets,
            }
        };
    }
    ngOnChanges(changes) {
        console.log('changes', changes, changes?.['chardata']?.currentValue);
        // this.chartType='pie'
        this.chartData.push(changes?.['chardata']?.currentValue);
        this.indexData.push(changes?.['canvasId']?.currentValue);
        this.chartTypeData.push(changes?.['chartType']?.currentValue);
        this.colSpanData.push(changes?.['colSpan']?.currentValue);
        this.ChangesValue = changes;
        console.log('chartType', this.chartType);
    }
    ngAfterViewInit() {
        this.getchartdataAId();
    }
    getchartdataAId() {
        for (let index = 0; index < this.indexData.length; index++) {
            this.createChart(this.chartData[index], this.indexData[index], this.chartTypeData[index]);
            this.getCanvaId(this.indexData[index]);
            this.getCanvasChrtType(this.chartTypeData[index]);
            this.getColSpanValue(this.colSpanData[index]);
        }
    }
    getCanvaId(canvaid) {
        return canvaid;
    }
    getCanvasChrtType(getChartype) {
        return getChartype;
    }
    getColSpanValue(ColSpanValue) {
        return ColSpanValue;
    }
}
imsCharts.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: imsCharts, deps: [{ token: MasterService }, { token: DeclerationMasterService }], target: i0.ɵɵFactoryTarget.Component });
imsCharts.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: imsCharts, selector: "ims-charts", inputs: { myinputMsg: "myinputMsg", chartname: "chartname", chartType: ["ChartType", "chartType"], colSpan: "colSpan", canvasId: "canvasId", index: "index", chardata: ["chartData", "chardata"], options: "options", barLine: "barLine" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"ChartSettings\" (click)=\"isVisible = !isVisible\">\r\n  <div class=\"row\" style=\"float: right;\r\n  margin-top: -35px; cursor: pointer;\">\r\n<div class=\"icon\">\r\n  <img style=\"width:35px; margin-right: 20px;\" src=\"../../assets/setting.png\" alt=\"\">\r\n</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"settingInputs\" *ngIf=\"isVisible\">\r\n  <div class=\"colspans d-flex mb-2 align-items-center \">\r\n    <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n      <strong>Col Span :</strong>\r\n    </label>\r\n    <input type=\"text\" class=\"form-control\" (keydown.enter)=\"ChooseColSpan($event)\" (keydown.enter)=\"reload()\"> \r\n\r\n  </div>\r\n        <div class=\"chartTypeinputs d-flex align-items-center\" style=\"width:100%\">\r\n\r\n        \r\n              \r\n              <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n                <strong>Chart Type :</strong>\r\n              </label>\r\n             <select class=\"form-control\" (change)=\"ChooseChartType($event)\" [(ngModel)]=\"chartType\">\r\n                <option value=\"line\">Line</option>\r\n                <option value=\"bar\">bar</option>\r\n                <option value=\"pie\">pie</option>\r\n                <option value=\"doughnut\">doughnut</option>\r\n             </select>     \r\n        </div>\r\n        \r\n</div>\r\n\r\n    <canvas [id]=\"canvasId\"></canvas>\r\n \r\n       \r\n  \r\n      \r\n     \r\n     \r\n    \r\n", styles: [".settingInputs{position:absolute;right:20px;border:1px solid #ddd;background:#fff;border-radius:10px;padding:15px;top:55px;width:280px}\n"], dependencies: [{ kind: "directive", type: i3.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: imsCharts, decorators: [{
            type: Component,
            args: [{ selector: 'ims-charts', template: "<div class=\"ChartSettings\" (click)=\"isVisible = !isVisible\">\r\n  <div class=\"row\" style=\"float: right;\r\n  margin-top: -35px; cursor: pointer;\">\r\n<div class=\"icon\">\r\n  <img style=\"width:35px; margin-right: 20px;\" src=\"../../assets/setting.png\" alt=\"\">\r\n</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"settingInputs\" *ngIf=\"isVisible\">\r\n  <div class=\"colspans d-flex mb-2 align-items-center \">\r\n    <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n      <strong>Col Span :</strong>\r\n    </label>\r\n    <input type=\"text\" class=\"form-control\" (keydown.enter)=\"ChooseColSpan($event)\" (keydown.enter)=\"reload()\"> \r\n\r\n  </div>\r\n        <div class=\"chartTypeinputs d-flex align-items-center\" style=\"width:100%\">\r\n\r\n        \r\n              \r\n              <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n                <strong>Chart Type :</strong>\r\n              </label>\r\n             <select class=\"form-control\" (change)=\"ChooseChartType($event)\" [(ngModel)]=\"chartType\">\r\n                <option value=\"line\">Line</option>\r\n                <option value=\"bar\">bar</option>\r\n                <option value=\"pie\">pie</option>\r\n                <option value=\"doughnut\">doughnut</option>\r\n             </select>     \r\n        </div>\r\n        \r\n</div>\r\n\r\n    <canvas [id]=\"canvasId\"></canvas>\r\n \r\n       \r\n  \r\n      \r\n     \r\n     \r\n    \r\n", styles: [".settingInputs{position:absolute;right:20px;border:1px solid #ddd;background:#fff;border-radius:10px;padding:15px;top:55px;width:280px}\n"] }]
        }], ctorParameters: function () { return [{ type: MasterService }, { type: DeclerationMasterService }]; }, propDecorators: { myinputMsg: [{
                type: Input
            }], chartname: [{
                type: Input
            }], chartType: [{
                type: Input,
                args: ['ChartType']
            }], colSpan: [{
                type: Input,
                args: ['colSpan']
            }], canvasId: [{
                type: Input,
                args: ['canvasId']
            }], index: [{
                type: Input,
                args: ['index']
            }], chardata: [{
                type: Input,
                args: ['chartData']
            }], options: [{
                type: Input,
                args: ['options']
            }], barLine: [{
                type: Input,
                args: ['barLine']
            }] } });

// export class ImsChartLibComponent {
// }
class ImsChartLibComponent {
    constructor(http, router, masterService, declerationService) {
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        this.declerationService = declerationService;
        this.newData = [];
        this.dataforloop = [];
        this.callChartSelector = false;
        this.option1 = {
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
        };
        this.http.get("./appConfig.json")
            .subscribe((data) => {
            localStorage.setItem("ims-chartApiUrl", data.apiUrl);
        });
        this.dashboardmaindata();
    }
    ChooseColSpan(value) {
        this.declerationService.ColSpanValue = value.target.value;
        console.log('changecol', this.declerationService.ColSpanValue);
        //  this.chartComp.ChooseColSpan();
    }
    getChartData(index) {
        return this.dataforloop[index + 1];
    }
    dashboardmaindata() {
        this.masterService.DashboardData().subscribe((mainData) => {
            this.dataforloop = mainData;
            this.callChartSelector = true;
            console.log('this.dataforloop', this.dataforloop, this.callChartSelector);
            // DATA CONVERSION
            let getccdata = [];
            mainData.map((p) => {
                getccdata.push(p.ccdata);
                // this.declerationService.ColSpanValue=(p.colSpan)
            });
            console.log('this.getccdata', getccdata);
            getccdata.forEach((element) => {
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
ImsChartLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibComponent, deps: [{ token: i2.HttpClient }, { token: i1.Router }, { token: MasterService }, { token: DeclerationMasterService }], target: i0.ɵɵFactoryTarget.Component });
ImsChartLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ImsChartLibComponent, selector: "lib-imsChartLib", viewQueries: [{ propertyName: "chartComp", first: true, predicate: ["imschart"], descendants: true }], ngImport: i0, template: "<div class=\"home_content\">\r\n    <div class=\"dashboardContents\">\r\n      <div class=\"row mainDashboardFirstWrapper\" style=\"margin: 0;\">\r\n        <ng-container  >\r\n          <ng-container *ngFor=\"let data of dataforloop; let i = index \">\r\n              <div  *ngIf=\"this.declerationService.ColSpanValue[i]\" class=\"col-lg-{{this.declerationService.ColSpanValue[i]}}\">\r\n              <div class=\"bar-chart-container \">\r\n                <div class=\"chartsheading\">\r\n                  <div class=\"left\">\r\n                    <h5 >{{data.title}}  </h5>\r\n                  \r\n                  </div>\r\n            \r\n                </div>\r\n    \r\n                <ims-charts  [colSpan]=\"data.colSpan\" [index]=\"i\" [ChartType]=\"data.chartType\" [chartData]=\"this.declerationService.Dataforchart[data.canvasId]\" [canvasId]=\"data.canvasId\" [options]=\"option1\" style=\"width: 100%\"></ims-charts>\r\n  \r\n              </div>\r\n            </div>\r\n            <div  *ngIf=\"!this.declerationService.ColSpanValue[i]\"class=\"col-lg-{{data.colSpan}}\">\r\n              <div class=\"bar-chart-container \">\r\n                <div class=\"chartsheading\">\r\n  \r\n                 \r\n                  <div class=\"left\">\r\n                    <h5 >{{data.title}}  </h5>\r\n                    <!-- <h5>{{data.colSpan}}</h5> -->\r\n                  <!-- <input type=\"text\"  (change)=\"ChooseColSpan($event)\" [(ngModel)]=\"data.colSpan\"> -->\r\n                  </div>\r\n            \r\n                </div>\r\n    \r\n                <ims-charts   [index]=\"i\" [ChartType]=\"data.chartType\" [chartData]=\"this.declerationService.Dataforchart[data.canvasId]\" [canvasId]=\"data.canvasId\" [options]=\"option1\" style=\"width: 100%\"></ims-charts>\r\n  \r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>", styles: [".dashboardContents{margin-top:30px}@media screen and (max-width: 767px){.dashboardContents{margin-top:40px}}.dashboardContents .bar-chart-container{padding:15px;border-radius:5px;background-color:#f3f3f3}.dashboardContents .bar-chart-container .chartsheading{display:flex;justify-content:space-between}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: imsCharts, selector: "ims-charts", inputs: ["myinputMsg", "chartname", "ChartType", "colSpan", "canvasId", "index", "chartData", "options", "barLine"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-imsChartLib', encapsulation: ViewEncapsulation.None, template: "<div class=\"home_content\">\r\n    <div class=\"dashboardContents\">\r\n      <div class=\"row mainDashboardFirstWrapper\" style=\"margin: 0;\">\r\n        <ng-container  >\r\n          <ng-container *ngFor=\"let data of dataforloop; let i = index \">\r\n              <div  *ngIf=\"this.declerationService.ColSpanValue[i]\" class=\"col-lg-{{this.declerationService.ColSpanValue[i]}}\">\r\n              <div class=\"bar-chart-container \">\r\n                <div class=\"chartsheading\">\r\n                  <div class=\"left\">\r\n                    <h5 >{{data.title}}  </h5>\r\n                  \r\n                  </div>\r\n            \r\n                </div>\r\n    \r\n                <ims-charts  [colSpan]=\"data.colSpan\" [index]=\"i\" [ChartType]=\"data.chartType\" [chartData]=\"this.declerationService.Dataforchart[data.canvasId]\" [canvasId]=\"data.canvasId\" [options]=\"option1\" style=\"width: 100%\"></ims-charts>\r\n  \r\n              </div>\r\n            </div>\r\n            <div  *ngIf=\"!this.declerationService.ColSpanValue[i]\"class=\"col-lg-{{data.colSpan}}\">\r\n              <div class=\"bar-chart-container \">\r\n                <div class=\"chartsheading\">\r\n  \r\n                 \r\n                  <div class=\"left\">\r\n                    <h5 >{{data.title}}  </h5>\r\n                    <!-- <h5>{{data.colSpan}}</h5> -->\r\n                  <!-- <input type=\"text\"  (change)=\"ChooseColSpan($event)\" [(ngModel)]=\"data.colSpan\"> -->\r\n                  </div>\r\n            \r\n                </div>\r\n    \r\n                <ims-charts   [index]=\"i\" [ChartType]=\"data.chartType\" [chartData]=\"this.declerationService.Dataforchart[data.canvasId]\" [canvasId]=\"data.canvasId\" [options]=\"option1\" style=\"width: 100%\"></ims-charts>\r\n  \r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>", styles: [".dashboardContents{margin-top:30px}@media screen and (max-width: 767px){.dashboardContents{margin-top:40px}}.dashboardContents .bar-chart-container{padding:15px;border-radius:5px;background-color:#f3f3f3}.dashboardContents .bar-chart-container .chartsheading{display:flex;justify-content:space-between}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.HttpClient }, { type: i1.Router }, { type: MasterService }, { type: DeclerationMasterService }]; }, propDecorators: { chartComp: [{
                type: ViewChild,
                args: ['imschart']
            }] } });

class ImsChartLibModule {
    static forRoot() {
        return {
            ngModule: ImsChartLibModule,
        };
    }
}
ImsChartLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ImsChartLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibModule, declarations: [ImsChartLibComponent,
        imsCharts], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        CommonModule], exports: [ImsChartLibComponent, imsCharts] });
ImsChartLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibModule, providers: [MasterService, HttpClient, DeclerationMasterService], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImsChartLibModule, decorators: [{
            type: NgModule,
            args: [{
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
                    providers: [MasterService, HttpClient, DeclerationMasterService]
                }]
        }] });

class ChartData {
    constructor() {
        this.chartType = "";
        this.group = '';
        this.category = '';
        this.label = '';
        this.color = '';
        this.status = '';
    }
}

/*
 * Public API Surface of ims-chart-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartData, DeclerationMasterService, ImsChartLibComponent, ImsChartLibModule, ImsChartLibService, MasterService, imsCharts };
//# sourceMappingURL=ims-chart-lib.mjs.map
