import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAccordianComponent } from './mat-accordian.component';

describe('MatAccordianComponent', () => {
  let component: MatAccordianComponent;
  let fixture: ComponentFixture<MatAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
