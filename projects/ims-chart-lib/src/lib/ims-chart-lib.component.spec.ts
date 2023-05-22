import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsChartLibComponent } from './ims-chart-lib.component';

describe('ImsChartLibComponent', () => {
  let component: ImsChartLibComponent;
  let fixture: ComponentFixture<ImsChartLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImsChartLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImsChartLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
