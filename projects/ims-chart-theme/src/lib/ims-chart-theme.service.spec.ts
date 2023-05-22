import { TestBed } from '@angular/core/testing';

import { ImsChartThemeService } from './ims-chart-theme.service';

describe('ImsChartThemeService', () => {
  let service: ImsChartThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImsChartThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
