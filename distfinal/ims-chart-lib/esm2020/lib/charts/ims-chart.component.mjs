import { Component, Input } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import * as i0 from "@angular/core";
import * as i1 from "../services/masterRepoService";
import * as i2 from "../services/decleration-master.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
export class imsCharts {
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
imsCharts.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: imsCharts, deps: [{ token: i1.MasterService }, { token: i2.DeclerationMasterService }], target: i0.ɵɵFactoryTarget.Component });
imsCharts.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: imsCharts, selector: "ims-charts", inputs: { myinputMsg: "myinputMsg", chartname: "chartname", chartType: ["ChartType", "chartType"], colSpan: "colSpan", canvasId: "canvasId", index: "index", chardata: ["chartData", "chardata"], options: "options", barLine: "barLine" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"ChartSettings\" (click)=\"isVisible = !isVisible\">\r\n  <div class=\"row\" style=\"float: right;\r\n  margin-top: -35px; cursor: pointer;\">\r\n<div class=\"icon\">\r\n  <img style=\"width:35px; margin-right: 20px;\" src=\"../../assets/setting.png\" alt=\"\">\r\n</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"settingInputs\" *ngIf=\"isVisible\">\r\n  <div class=\"colspans d-flex mb-2 align-items-center \">\r\n    <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n      <strong>Col Span :</strong>\r\n    </label>\r\n    <input type=\"text\" class=\"form-control\" (keydown.enter)=\"ChooseColSpan($event)\" (keydown.enter)=\"reload()\"> \r\n\r\n  </div>\r\n        <div class=\"chartTypeinputs d-flex align-items-center\" style=\"width:100%\">\r\n\r\n        \r\n              \r\n              <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n                <strong>Chart Type :</strong>\r\n              </label>\r\n             <select class=\"form-control\" (change)=\"ChooseChartType($event)\" [(ngModel)]=\"chartType\">\r\n                <option value=\"line\">Line</option>\r\n                <option value=\"bar\">bar</option>\r\n                <option value=\"pie\">pie</option>\r\n                <option value=\"doughnut\">doughnut</option>\r\n             </select>     \r\n        </div>\r\n        \r\n</div>\r\n\r\n    <canvas [id]=\"canvasId\"></canvas>\r\n \r\n       \r\n  \r\n      \r\n     \r\n     \r\n    \r\n", styles: [".settingInputs{position:absolute;right:20px;border:1px solid #ddd;background:#fff;border-radius:10px;padding:15px;top:55px;width:280px}\n"], dependencies: [{ kind: "directive", type: i3.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: imsCharts, decorators: [{
            type: Component,
            args: [{ selector: 'ims-charts', template: "<div class=\"ChartSettings\" (click)=\"isVisible = !isVisible\">\r\n  <div class=\"row\" style=\"float: right;\r\n  margin-top: -35px; cursor: pointer;\">\r\n<div class=\"icon\">\r\n  <img style=\"width:35px; margin-right: 20px;\" src=\"../../assets/setting.png\" alt=\"\">\r\n</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"settingInputs\" *ngIf=\"isVisible\">\r\n  <div class=\"colspans d-flex mb-2 align-items-center \">\r\n    <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n      <strong>Col Span :</strong>\r\n    </label>\r\n    <input type=\"text\" class=\"form-control\" (keydown.enter)=\"ChooseColSpan($event)\" (keydown.enter)=\"reload()\"> \r\n\r\n  </div>\r\n        <div class=\"chartTypeinputs d-flex align-items-center\" style=\"width:100%\">\r\n\r\n        \r\n              \r\n              <label class=\"form-check-label\" for=\"flexCheckDefault\" style=\"flex:0 0 45%\">\r\n                <strong>Chart Type :</strong>\r\n              </label>\r\n             <select class=\"form-control\" (change)=\"ChooseChartType($event)\" [(ngModel)]=\"chartType\">\r\n                <option value=\"line\">Line</option>\r\n                <option value=\"bar\">bar</option>\r\n                <option value=\"pie\">pie</option>\r\n                <option value=\"doughnut\">doughnut</option>\r\n             </select>     \r\n        </div>\r\n        \r\n</div>\r\n\r\n    <canvas [id]=\"canvasId\"></canvas>\r\n \r\n       \r\n  \r\n      \r\n     \r\n     \r\n    \r\n", styles: [".settingInputs{position:absolute;right:20px;border:1px solid #ddd;background:#fff;border-radius:10px;padding:15px;top:55px;width:280px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MasterService }, { type: i2.DeclerationMasterService }]; }, propDecorators: { myinputMsg: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1zLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltcy1jaGFydC1saWIvc3JjL2xpYi9jaGFydHMvaW1zLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltcy1jaGFydC1saWIvc3JjL2xpYi9jaGFydHMvaW1zLWNoYXJ0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBc0QsTUFBTSxlQUFlLENBQUM7QUFDckcsbURBQW1EO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7QUFZaEQsTUFBTSxPQUFPLFNBQVM7SUE0QnBCLFlBQW1CLGFBQTRCLEVBQVUsa0JBQTRDO1FBQWxGLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQjtRQTFCckcsY0FBUyxHQUFTLEtBQUssQ0FBQztRQUd4QixrQkFBYSxHQUFPLEVBQUUsQ0FBQztRQU9ILGFBQVEsR0FBYSxFQUFFLENBQUM7UUFFNUMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUtuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBUyxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBTyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBTyxFQUFFLENBQUM7UUFJbkIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLDRCQUE0QjtJQUU3QixDQUFDO0lBR0YsUUFBUTtJQUVSLENBQUM7SUFFSCxpRUFBaUU7SUFDakUsa0NBQWtDO0lBQ2xDLDZCQUE2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QUFLO3NCQUFwQixLQUFLO3VCQUFDLE9BQU87Z0JBQ00sUUFBUTtzQkFBM0IsS0FBSzt1QkFBQyxXQUFXO2dCQU1ELE9BQU87c0JBQXZCLEtBQUs7dUJBQUMsU0FBUztnQkFDRSxPQUFPO3NCQUF4QixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZXMsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBDaGFydCwgcmVnaXN0ZXJhYmxlcyB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IE1hc3RlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYXN0ZXJSZXBvU2VydmljZSc7XHJcbmltcG9ydCB7IERlY2xlcmF0aW9uTWFzdGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RlY2xlcmF0aW9uLW1hc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnLi4vY29tbW9uL0NsYXNzZXMvY2hhcnREYXRhLmNsYXNzJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ltcy1jaGFydHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbXMtY2hhcnRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbXMtY2hhcnRzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIGltc0NoYXJ0cyBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgaXNWaXNpYmxlOmJvb2xlYW49ZmFsc2U7XHJcbiAgZGF0YW1vZGU6YW55O1xyXG4gIENoYW5nZXNWYWx1ZTphbnlcclxuICBkYXNoYm9hcmREYXRhOmFueVtdPVtdO1xyXG4gIEBJbnB1dCgpIG15aW5wdXRNc2chOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2hhcnRuYW1lITogc3RyaW5nO1xyXG4gIEBJbnB1dCgnQ2hhcnRUeXBlJykgY2hhcnRUeXBlITogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY29sU3BhbicpIGNvbFNwYW4hOiBzdHJpbmc7XHJcbiAgQElucHV0KCdjYW52YXNJZCcpIGNhbnZhc0lkITogbnVtYmVyO1xyXG4gIEBJbnB1dCgnaW5kZXgnKSBpbmRleCE6IG51bWJlcjtcclxuICBASW5wdXQoJ2NoYXJ0RGF0YScpIGNoYXJkYXRhOkNoYXJ0RGF0YVtdPVtdO1xyXG4gIHB1YmxpYyBjaGFydDogYW55O1xyXG4gIExhYmVsczpzdHJpbmdbXT1bXTtcclxuICBZYXhpczpzdHJpbmdbXT1bXTtcclxuICBYYXhpczpzdHJpbmdbXT1bXTtcclxuICBjb2xvcnM6c3RyaW5nW109W107XHJcbiAgQElucHV0KCdvcHRpb25zJylvcHRpb25zOmFueTtcclxuICBASW5wdXQoJ2JhckxpbmUnKSBiYXJMaW5lPzogbnVtYmVyO1xyXG5cclxuXHJcbiAgY2hhcnREYXRhOmFueVtdID1bXTtcclxuICBpbmRleERhdGE6YW55W10gPSBbXTtcclxuICBjaGFydFR5cGVEYXRhOmFueVtdPVtdO1xyXG4gIGNvbFNwYW5EYXRhOmFueVtdPVtdO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1hc3RlclNlcnZpY2U6IE1hc3RlclNlcnZpY2UsICBwdWJsaWMgZGVjbGVyYXRpb25TZXJ2aWNlOiBEZWNsZXJhdGlvbk1hc3RlclNlcnZpY2UsKSB7XHJcbiAgICBDaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcclxuICAgIC8vIHRoaXMuY2hhcnRUeXBlPVwiZG91Z2hudXRcIlxyXG5cclxuICAgfVxyXG4gIFxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICBcclxuICB9XHJcbiAgXHJcbi8vICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXHJcbi8vICAgICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KXtcclxuLy8gICAgICAgdGhpcy5pc1Zpc2libGU9dHJ1ZTtcclxuLy8gwqDCoMKgwqB9XHJcblxyXG5kaXN0cm95Q2hhcnQoKXtcclxuICBsZXQgaWlkID0gIHRoaXMuQ2hhbmdlc1ZhbHVlPy5jYW52YXNJZD8uY3VycmVudFZhbHVlXHJcbiB2YXIgY2hhcnQgPSBPYmplY3QudmFsdWVzKENoYXJ0Lmluc3RhbmNlcykuZmlsdGVyKChjKSA9PiBjLmNhbnZhcy5pZCA9PSBpaWQpLnBvcCgpXHJcbiBjaGFydD8uZGVzdHJveSgpO1xyXG5cclxufVxyXG5cclxuXHJcbiAgQ2hvb3NlQ2hhcnRUeXBlKHZhbHVlOmFueSl7XHJcbiAgICB0aGlzLmNoYXJ0VHlwZT0gdmFsdWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5nZXRDYW52YXNDaHJ0VHlwZSh0aGlzLmNoYXJ0VHlwZSlcclxuICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgICBcclxuICB9XHJcbiBcclxuICBDaG9vc2VDb2xTcGFuKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5kZWNsZXJhdGlvblNlcnZpY2UuQ29sU3BhblZhbHVlW3RoaXMuaW5kZXhdID0gbmV3VmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygnY2NjJywgdGhpcy5kZWNsZXJhdGlvblNlcnZpY2UuQ29sU3BhblZhbHVlW3RoaXMuaW5kZXhdKTtcclxuICAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHNob3doaWRlKCl7fVxyXG4gIFxyXG4gIHJlbG9hZCgpe1xyXG4gICAgbGV0IGlpZCA9IHRoaXMuQ2hhbmdlc1ZhbHVlPy5jYW52YXNJZD8uY3VycmVudFZhbHVlO1xyXG4gICAgbGV0IGNoYXJ0c2RkYXRhOiBhbnlbXSA9IFtdO1xyXG4gICAgY2hhcnRzZGRhdGEgPSB0aGlzLmNoYXJ0RGF0YVswXTtcclxuICAgIHRoaXMuZGlzdHJveUNoYXJ0KCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KGNoYXJ0c2RkYXRhLCBpaWQsIHRoaXMuY2hhcnRUeXBlKTtcclxuXHJcbiAgfVxyXG5cclxuY3JlYXRlQ2hhcnQoY2hleGtkYXRhT2JqOmFueSxjYW52YXNJZDpzdHJpbmcsY2hhcnRUeXBlOnN0cmluZyl7XHJcbiAgdmFyIGRhdGE6YW55O1xyXG4gICBsZXQgY2hleGtkYXRhOmFueT1bXTtcclxuICAvLyAgY2hleGtkYXRhLnB1c2goY2hleGtkYXRhT2JqKTtcclxuICAvLyBjb25zb2xlLmxvZygnY2hleGtkYXRhJywgY2hleGtkYXRhKVxyXG4gIGlmKGNoYXJ0VHlwZT09J2JhcicgJiYgY2hleGtkYXRhT2JqLmxlbmd0aCA+MCl7XHJcbiAgICAgZGF0YSA9IHRoaXMubWFwRGF0YUZvckJhcihjaGV4a2RhdGFPYmopXHJcblxyXG4gIH1cclxuICBpZihjaGFydFR5cGU9PSdwaWUnIHx8IGNoYXJ0VHlwZT09J2RvdWdobnV0JyAmJiBjaGV4a2RhdGFPYmoubGVuZ3RoID4wKXtcclxuICAgICBkYXRhID0gdGhpcy5tYXBEYXRhRm9yUGllKGNoZXhrZGF0YU9iailcclxuXHJcbiAgfVxyXG4gIGlmKGNoYXJ0VHlwZT09J2xpbmUnICYmIGNoZXhrZGF0YU9iai5sZW5ndGggPjApe1xyXG4gICAgIGRhdGEgPSB0aGlzLm1hcERhdGFGb3JMaW5lKGNoZXhrZGF0YU9iaiwnbGluZScpXHJcblxyXG4gIH1cclxuXHJcbiAgICBcclxuICAgIC8vICAgaWYgKHdpbmRvdy5teUNoYXJ0cyAhPSB1bmRlZmluZWQgKVxyXG4gICAgLy8gICB3aW5kb3cubXlDaGFydHMuZGVzdHJveSgpO1xyXG4gICAgLy8gd2luZG93Lm15Q2hhcnRzICA9IFxyXG4gdmFyIG15Q2hhcnQgPW5ldyBDaGFydChgJHtjYW52YXNJZH1gLCBkYXRhKVxyXG4gY29uc29sZS5sb2coJ215Q2hhcnQnLCBteUNoYXJ0KVxyXG4gIFxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdjZGF0YWlkJyx3aW5kb3cubXlDaGFydHMgICk7XHJcblxyXG59XHJcblxyXG5cclxubWFwRGF0YUZvckJhcihjaGFydGRhdGE6Q2hhcnREYXRhW10pe1xyXG5cclxuICAgIHZhciBsYnM9IGNoYXJ0ZGF0YS5maWx0ZXIoKHRoaW5nLGksZGF0YSk9PmRhdGEuZmluZEluZGV4KHQ9PnQuZ3JvdXA9PXRoaW5nLmdyb3VwKT09PWkpLm1hcCh4PT54Lmdyb3VwKTtcclxuICAgIHZhciBjYXRlZ29yaWVzPSBjaGFydGRhdGEuZmlsdGVyKCh0aGluZyxpLGRhdGEpPT5kYXRhLmZpbmRJbmRleCh0PT50LmNhdGVnb3J5PT10aGluZy5jYXRlZ29yeSk9PT1pKTtcclxuICAgXHJcbiAgICBcclxuICAgIHZhciBjYXRlZ29yeURhdGFTZXRzOmFueVtdPVtdXHJcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0PT57XHJcbiAgICB2YXIgY2F0RGF0YT1jaGFydGRhdGEuZmlsdGVyKHg9PnguY2F0ZWdvcnk9PWNhdC5jYXRlZ29yeSkubWFwKHk9PnkudmFsdWUpO1xyXG4gICAgXHJcbiAgICB2YXIgY2F0ZWdvcnlkYXRhID0geyBcclxuICAgICAgbGFiZWw6Y2F0LmNhdGVnb3J5LFxyXG4gICAgICBkYXRhOmNhdERhdGEsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpjYXQuY29sb3JcclxuICAgIH1cclxuICAgIGNhdGVnb3J5RGF0YVNldHMucHVzaChjYXRlZ29yeWRhdGEpOyAgIFxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOidiYXInLFxyXG4gICAgZGF0YTp7XHJcbiAgICAgIGxhYmVsczpsYnMsXHJcbiAgICAgIGRhdGFzZXRzOmNhdGVnb3J5RGF0YVNldHMsXHJcbiAgICB9XHJcbiAgfSBcclxuICBcclxufVxyXG5cclxubWFwRGF0YUZvckxpbmUoY2hhcnRkYXRhOkNoYXJ0RGF0YVtdLGNoYXJ0dHlwZTpzdHJpbmc9J2xpbmUnKXtcclxuICB2YXIgbGJzPSBjaGFydGRhdGEuZmlsdGVyKCh0aGluZyxpLGRhdGEpPT5kYXRhLmZpbmRJbmRleCh0PT50Lmdyb3VwPT10aGluZy5ncm91cCk9PT1pKS5tYXAoeD0+eC5ncm91cCk7XHJcbiAgdmFyIGNhdGVnb3JpZXM9IGNoYXJ0ZGF0YS5maWx0ZXIoKHRoaW5nLGksZGF0YSk9PmRhdGEuZmluZEluZGV4KHQ9PnQuY2F0ZWdvcnk9PXRoaW5nLmNhdGVnb3J5KT09PWkpO1xyXG4gIHZhciBjYXRlZ29yeURhdGFTZXRzOmFueVtdPVtdXHJcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdD0+e1xyXG4gICAgdmFyIGNhdERhdGE9Y2hhcnRkYXRhLmZpbHRlcih4PT54LmNhdGVnb3J5PT1jYXQuY2F0ZWdvcnkpLm1hcCh5PT55LmxhYmVsKTtcclxuICAgIHZhciBjYXRlZ29yeWRhdGEgPSB7IFxyXG4gICAgICBsYWJlbDonbGFzdCBtb250aCcsXHJcbiAgICAgIGRhdGE6Y2F0RGF0YSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOmNhdC5jb2xvcixcclxuICAgICAgdGVuc2lvbjowLjMsXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgdmFyIGNhdERhdGEyPWNoYXJ0ZGF0YS5maWx0ZXIoeD0+eC5jYXRlZ29yeT09Y2F0LmNhdGVnb3J5KS5tYXAoeT0+eS52YWx1ZSk7XHJcbiAgICB2YXIgY2F0ZWdvcnlkYXRhMiA9IHsgXHJcbiAgICAgIGxhYmVsOid0aGlzIG1vbnRoJyxcclxuICAgICAgZGF0YTpjYXREYXRhMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOmNhdC5jb2xvcixcclxuICAgICAgdGVuc2lvbjowLjNcclxuICAgIH1cclxuICAgIGNhdGVnb3J5RGF0YVNldHMucHVzaChjYXRlZ29yeWRhdGEpO1xyXG4gICAgY2F0ZWdvcnlEYXRhU2V0cy5wdXNoKGNhdGVnb3J5ZGF0YTIpO1xyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOmNoYXJ0dHlwZSxcclxuICAgIGRhdGE6e1xyXG4gICAgICBsYWJlbHM6bGJzLFxyXG4gICAgICBkYXRhc2V0czpjYXRlZ29yeURhdGFTZXRzLFxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gIH0gXHJcbiAgXHJcbn1cclxuXHJcbm1hcERhdGFGb3JQaWUoY2hhcnRkYXRhOkNoYXJ0RGF0YVtdKXtcclxuICB2YXIgbGJzPSBjaGFydGRhdGEuZmlsdGVyKCh0aGluZyxpLGRhdGEpPT5kYXRhLmZpbmRJbmRleCh0PT50Lmdyb3VwPT10aGluZy5ncm91cCk9PT1pKS5tYXAoeD0+eC5ncm91cCk7XHJcbiAgLy8gdmFyIGNhdGVnb3JpZXM9IGNoYXJ0ZGF0YS5maWx0ZXIoKHRoaW5nLGksZGF0YSk9PmRhdGEuZmluZEluZGV4KHQ9PnQuY2F0ZWdvcnk9PXRoaW5nLmNhdGVnb3J5KT09PWkpO1xyXG4gIHZhciBjYXRlZ29yeURhdGFTZXRzOmFueVtdPVtdXHJcbiAgLy8gY2F0ZWdvcmllcy5mb3JFYWNoKGNhdD0+e1xyXG4gICAgdmFyIHZhbHVlPWNoYXJ0ZGF0YS5tYXAoeT0+eS52YWx1ZSk7XHJcbiAgICB2YXIgbGFiZWw9Y2hhcnRkYXRhLm1hcCh5PT55LmxhYmVsKTtcclxuICAgXHJcbiAgICB2YXIgY2F0ZWdvcnlkYXRhID0geyBcclxuICAgICAgLy8gbGFiZWw6bGFiZWwsXHJcbiAgICAgIGRhdGE6dmFsdWUsXHJcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjpjYXQuY29sb3JcclxuICAgIH1cclxuICAgIGNhdGVnb3J5RGF0YVNldHMucHVzaChjYXRlZ29yeWRhdGEpO1xyXG4gIC8vIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOnRoaXMuY2hhcnRUeXBlLFxyXG4gICAgZGF0YTp7XHJcbiAgICAgIGxhYmVsczpsYnMsXHJcbiAgICAgIGRhdGFzZXRzOmNhdGVnb3J5RGF0YVNldHMsXHJcbiAgICB9XHJcbiAgfSBcclxuICBcclxufVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczpTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMsY2hhbmdlcz8uWydjaGFyZGF0YSddPy5jdXJyZW50VmFsdWUpXHJcbiAgICAgICAgLy8gdGhpcy5jaGFydFR5cGU9J3BpZSdcclxuICAgICAgICB0aGlzLmNoYXJ0RGF0YS5wdXNoKGNoYW5nZXM/LlsnY2hhcmRhdGEnXT8uY3VycmVudFZhbHVlKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5kZXhEYXRhLnB1c2goY2hhbmdlcz8uWydjYW52YXNJZCddPy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuY2hhcnRUeXBlRGF0YS5wdXNoKGNoYW5nZXM/LlsnY2hhcnRUeXBlJ10/LmN1cnJlbnRWYWx1ZSlcclxuICAgICAgICB0aGlzLmNvbFNwYW5EYXRhLnB1c2goY2hhbmdlcz8uWydjb2xTcGFuJ10/LmN1cnJlbnRWYWx1ZSlcclxuXHJcbiAgICAgICAgdGhpcy5DaGFuZ2VzVmFsdWU9Y2hhbmdlc1xyXG4gICAgY29uc29sZS5sb2coJ2NoYXJ0VHlwZScsdGhpcy5jaGFydFR5cGUpXHJcblxyXG4gICAgfVxyXG5cclxuICBcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmdldGNoYXJ0ZGF0YUFJZCgpO1xyXG4gICAgfVxyXG5cclxuIGdldGNoYXJ0ZGF0YUFJZCgpe1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4RGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIHRoaXMuY3JlYXRlQ2hhcnQodGhpcy5jaGFydERhdGFbaW5kZXhdLHRoaXMuaW5kZXhEYXRhW2luZGV4XSx0aGlzLmNoYXJ0VHlwZURhdGFbaW5kZXhdICk7ICAgIFxyXG4gICAgdGhpcy5nZXRDYW52YUlkKHRoaXMuaW5kZXhEYXRhW2luZGV4XSk7IFxyXG4gICAgdGhpcy5nZXRDYW52YXNDaHJ0VHlwZSh0aGlzLmNoYXJ0VHlwZURhdGFbaW5kZXhdKTsgICBcclxuICAgIHRoaXMuZ2V0Q29sU3BhblZhbHVlKHRoaXMuY29sU3BhbkRhdGFbaW5kZXhdKTsgXHJcbiAgICAgICAgIFxyXG4gIH1cclxuXHJcbiB9XHJcblxyXG4gZ2V0Q2FudmFJZChjYW52YWlkOnN0cmluZyk6c3RyaW5ne1xyXG4gIHJldHVybiBjYW52YWlkO1xyXG4gfVxyXG4gZ2V0Q2FudmFzQ2hydFR5cGUoZ2V0Q2hhcnR5cGU6c3RyaW5nKTpzdHJpbmd7XHJcbiAgcmV0dXJuIGdldENoYXJ0eXBlO1xyXG4gfVxyXG4gZ2V0Q29sU3BhblZhbHVlKENvbFNwYW5WYWx1ZTpzdHJpbmcpOnN0cmluZ3tcclxuICByZXR1cm4gQ29sU3BhblZhbHVlO1xyXG4gfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiQ2hhcnRTZXR0aW5nc1wiIChjbGljayk9XCJpc1Zpc2libGUgPSAhaXNWaXNpYmxlXCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC0zNXB4OyBjdXJzb3I6IHBvaW50ZXI7XCI+XHJcbjxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgPGltZyBzdHlsZT1cIndpZHRoOjM1cHg7IG1hcmdpbi1yaWdodDogMjBweDtcIiBzcmM9XCIuLi8uLi9hc3NldHMvc2V0dGluZy5wbmdcIiBhbHQ9XCJcIj5cclxuPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJzZXR0aW5nSW5wdXRzXCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sc3BhbnMgZC1mbGV4IG1iLTIgYWxpZ24taXRlbXMtY2VudGVyIFwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImZsZXhDaGVja0RlZmF1bHRcIiBzdHlsZT1cImZsZXg6MCAwIDQ1JVwiPlxyXG4gICAgICA8c3Ryb25nPkNvbCBTcGFuIDo8L3N0cm9uZz5cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIChrZXlkb3duLmVudGVyKT1cIkNob29zZUNvbFNwYW4oJGV2ZW50KVwiIChrZXlkb3duLmVudGVyKT1cInJlbG9hZCgpXCI+IFxyXG5cclxuICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRUeXBlaW5wdXRzIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImZsZXhDaGVja0RlZmF1bHRcIiBzdHlsZT1cImZsZXg6MCAwIDQ1JVwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5DaGFydCBUeXBlIDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIChjaGFuZ2UpPVwiQ2hvb3NlQ2hhcnRUeXBlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImNoYXJ0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpbmVcIj5MaW5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGllXCI+cGllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG91Z2hudXRcIj5kb3VnaG51dDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgPC9zZWxlY3Q+ICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuPC9kaXY+XHJcblxyXG4gICAgPGNhbnZhcyBbaWRdPVwiY2FudmFzSWRcIj48L2NhbnZhcz5cclxuIFxyXG4gICAgICAgXHJcbiAgXHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiJdfQ==