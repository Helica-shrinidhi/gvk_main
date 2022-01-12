import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GvkHeaderComponent } from './gvk-header.component';

describe('GvkHeaderComponent', () => {
  let component: GvkHeaderComponent;
  let fixture: ComponentFixture<GvkHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GvkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
