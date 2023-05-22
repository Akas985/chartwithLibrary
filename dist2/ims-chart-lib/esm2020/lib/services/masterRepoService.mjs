import { Injectable } from '@angular/core';
import { environment } from '../environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
export class MasterService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyUmVwb1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbXMtY2hhcnQtbGliL3NyYy9saWIvc2VydmljZXMvbWFzdGVyUmVwb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFTN0MsTUFBTSxPQUFPLGFBQWE7SUFReEIsWUFBb0IsTUFBYyxFQUFVLElBQWdCO1FBQXhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjFELHFCQUFnQixHQUFPLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFPLEVBQUUsQ0FBQTtRQUN2QixxQkFBZ0IsR0FBTyxFQUFFLENBQUE7UUFHeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQTtJQUMvRSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBUztRQUMzQixJQUNFLEtBQUssS0FBSyxTQUFTO1lBQ25CLEtBQUssSUFBSSxJQUFJO1lBQ2IsS0FBSyxLQUFLLEVBQUU7WUFDWixLQUFLLEtBQUssVUFBVTtZQUNwQixLQUFLLEtBQUssS0FBSztZQUNmLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDeEI7WUFDQSxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFFWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFbEQsQ0FBQzs7MEdBOUJZLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc3RlclNlcnZpY2Uge1xyXG4gICAgLy8gYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbiAgICBhcGlVcmw6IHN0cmluZztcclxuICAgIGRhaWx5V2Vla2x5OmFueTtcclxuICAgIENhdGVnb3J5TmFtZUxpc3Q6YW55W109W107XHJcbiAgICBzYWxlc1N0YXRjaGFydDphbnlbXT1bXVxyXG4gICAgY292ZXJyZXBvcnRjaGFydDphbnlbXT1bXVxyXG4gICAgY29sc3BhblZhbCE6c3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgICkgeyBcclxuICAgICB0aGlzLmFwaVVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1zLWNoYXJ0QXBpVXJsXCIpID8/IGVudmlyb25tZW50LmJhc2VVcmxcclxuICB9XHJcblxyXG4gIG51bGxUb1plcm9Db252ZXJ0ZXIodmFsdWU6YW55KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHZhbHVlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgdmFsdWUgPT0gbnVsbCB8fFxyXG4gICAgICB2YWx1ZSA9PT0gJycgfHxcclxuICAgICAgdmFsdWUgPT09ICdJbmZpbml0eScgfHxcclxuICAgICAgdmFsdWUgPT09ICdOYU4nIHx8XHJcbiAgICAgIGlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgRGFzaGJvYXJkRGF0YSggKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVcmwgKyBgL2NoYXJ0c2ApO1xyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIl19