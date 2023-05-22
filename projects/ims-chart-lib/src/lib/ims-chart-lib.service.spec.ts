import { TestBed } from '@angular/core/testing';

import { ImsChartLibService } from './ims-chart-lib.service';

describe('ImsChartLibService', () => {
  let service: ImsChartLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImsChartLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
