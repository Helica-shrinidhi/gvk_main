import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TFitComponent } from './t-fit.component';

describe('TFitComponent', () => {
  let component: TFitComponent;
  let fixture: ComponentFixture<TFitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
