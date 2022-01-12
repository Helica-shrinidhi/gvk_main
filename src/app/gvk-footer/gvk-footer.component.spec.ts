import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GvkFooterComponent } from './gvk-footer.component';

describe('GvkFooterComponent', () => {
  let component: GvkFooterComponent;
  let fixture: ComponentFixture<GvkFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GvkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
