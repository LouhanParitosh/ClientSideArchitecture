import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInsuranceDetailsComponent } from './my-insurance-details.component';

describe('MyInsuranceDetailsComponent', () => {
  let component: MyInsuranceDetailsComponent;
  let fixture: ComponentFixture<MyInsuranceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInsuranceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
