import { NgModule } from '@angular/core';
import { ImsChartLibComponent } from './ims-chart-lib.component';
import { MasterService } from './services/masterRepoService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeclerationMasterService } from './services/decleration-master.service';
import { imsCharts } from './charts/ims-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ImsChartLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1zLWNoYXJ0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pbXMtY2hhcnQtbGliL3NyYy9saWIvaW1zLWNoYXJ0LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBMkIvQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBQyxpQkFBaUI7U0FFM0IsQ0FBQTtJQUNILENBQUM7OzhHQU5VLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQXJCMUIsb0JBQW9CO1FBQ3BCLFNBQVMsYUFLVCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsWUFBWSxhQUlaLG9CQUFvQixFQUFFLFNBQVM7K0dBT3RCLGlCQUFpQixhQUpsQixDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQUMsWUFYN0QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFlBQVk7MkZBV0gsaUJBQWlCO2tCQXZCN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixTQUFTO3FCQUdWO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLFlBQVk7cUJBRWI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQixFQUFFLFNBQVM7cUJBQ2hDO29CQUVELFNBQVMsRUFBQyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQUM7aUJBQ2hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltc0NoYXJ0TGliQ29tcG9uZW50IH0gZnJvbSAnLi9pbXMtY2hhcnQtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXN0ZXJSZXBvU2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZWNsZXJhdGlvbk1hc3RlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RlY2xlcmF0aW9uLW1hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IGltc0NoYXJ0cyB9IGZyb20gJy4vY2hhcnRzL2ltcy1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEltc0NoYXJ0TGliQ29tcG9uZW50LFxuICAgIGltc0NoYXJ0c1xuICAgXG5cbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICAgIFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW1zQ2hhcnRMaWJDb21wb25lbnQsIGltc0NoYXJ0c1xuICBdLFxuXG4gIHByb3ZpZGVyczpbTWFzdGVyU2VydmljZSwgSHR0cENsaWVudCwgRGVjbGVyYXRpb25NYXN0ZXJTZXJ2aWNlXVxufSlcblxuXG5leHBvcnQgY2xhc3MgSW1zQ2hhcnRMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOk1vZHVsZVdpdGhQcm92aWRlcnM8SW1zQ2hhcnRMaWJNb2R1bGU+e1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTpJbXNDaGFydExpYk1vZHVsZSxcbiAgICAgIFxuICAgIH1cbiAgfVxufVxuIl19