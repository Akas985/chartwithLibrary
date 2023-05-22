import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
export class MasterService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        // apiUrl = 'http://localhost:3000';
        this.apiUrl = '';
        this.CategoryNameList = [];
        this.salesStatchart = [];
        this.coverreportchart = [];
        //  this.apiUrl = localStorage.getItem("ims-chartApiUrl") ?? environment.baseUrl
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyUmVwb1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbXMtY2hhcnQtbGliL3NyYy9saWIvc2VydmljZXMvbWFzdGVyUmVwb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVkzQyxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixNQUFjLEVBQVUsSUFBZ0I7UUFBeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFQMUQsb0NBQW9DO1FBQ3BDLFdBQU0sR0FBUyxFQUFFLENBQUM7UUFFbEIscUJBQWdCLEdBQU8sRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQU8sRUFBRSxDQUFBO1FBQ3ZCLHFCQUFnQixHQUFPLEVBQUUsQ0FBQTtRQUd6QixnRkFBZ0Y7SUFDbEYsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVM7UUFDM0IsSUFDRSxLQUFLLEtBQUssU0FBUztZQUNuQixLQUFLLElBQUksSUFBSTtZQUNiLEtBQUssS0FBSyxFQUFFO1lBQ1osS0FBSyxLQUFLLFVBQVU7WUFDcEIsS0FBSyxLQUFLLEtBQUs7WUFDZixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3hCO1lBQ0EsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhO1FBRVgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRWxELENBQUM7OzBHQTlCWSxhQUFhOzhHQUFiLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXN0ZXJTZXJ2aWNlIHtcclxuICAgIC8vIGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG4gICAgYXBpVXJsOiBzdHJpbmc9Jyc7XHJcbiAgICBkYWlseVdlZWtseTphbnk7XHJcbiAgICBDYXRlZ29yeU5hbWVMaXN0OmFueVtdPVtdO1xyXG4gICAgc2FsZXNTdGF0Y2hhcnQ6YW55W109W11cclxuICAgIGNvdmVycmVwb3J0Y2hhcnQ6YW55W109W11cclxuICAgIGNvbHNwYW5WYWwhOnN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsICApIHsgXHJcbiAgICAvLyAgdGhpcy5hcGlVcmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltcy1jaGFydEFwaVVybFwiKSA/PyBlbnZpcm9ubWVudC5iYXNlVXJsXHJcbiAgfVxyXG5cclxuICBudWxsVG9aZXJvQ29udmVydGVyKHZhbHVlOmFueSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIHZhbHVlID09IG51bGwgfHxcclxuICAgICAgdmFsdWUgPT09ICcnIHx8XHJcbiAgICAgIHZhbHVlID09PSAnSW5maW5pdHknIHx8XHJcbiAgICAgIHZhbHVlID09PSAnTmFOJyB8fFxyXG4gICAgICBpc05hTihwYXJzZUZsb2F0KHZhbHVlKSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIERhc2hib2FyZERhdGEoICkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsICsgYC9jaGFydHNgKTtcclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiJdfQ==