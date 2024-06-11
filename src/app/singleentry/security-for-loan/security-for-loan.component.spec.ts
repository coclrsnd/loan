import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityForLoanComponent } from './security-for-loan.component';

describe('SecurityForLoanComponent', () => {
  let component: SecurityForLoanComponent;
  let fixture: ComponentFixture<SecurityForLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityForLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityForLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
