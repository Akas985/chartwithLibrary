import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DeclerationMasterService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGVyYXRpb24tbWFzdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbXMtY2hhcnQtbGliL3NyYy9saWIvc2VydmljZXMvZGVjbGVyYXRpb24tbWFzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyx3QkFBd0I7SUFRbkM7UUFMQSxpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFPLEVBQUUsQ0FBQztRQUtwQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7cUhBWFUsd0JBQXdCO3lIQUF4Qix3QkFBd0IsY0FGdkIsTUFBTTsyRkFFUCx3QkFBd0I7a0JBSHBDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERlY2xlcmF0aW9uTWFzdGVyU2VydmljZSB7XHJcblxyXG4gIEN1cnJkYXRlOiBzdHJpbmc7XHJcbiAgRGF0YWZvcmNoYXJ0OiBhbnlbXSA9IFtdO1xyXG4gIENvbFNwYW5WYWx1ZTphbnlbXT1bXTtcclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLkN1cnJkYXRlID0gZm9ybWF0RGF0ZSh0b2RheSwgXCJ5eXktTU0tZGRcIiwgJ2VuLVVTJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==