import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CromptonComponent } from './crompton.component';

describe('CromptonComponent', () => {
  let component: CromptonComponent;
  let fixture: ComponentFixture<CromptonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CromptonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CromptonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
