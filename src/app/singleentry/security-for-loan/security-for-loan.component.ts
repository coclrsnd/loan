import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-security-for-loan',
  standalone: true,
  imports: [],
  templateUrl: './security-for-loan.component.html',
  styleUrl: './security-for-loan.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SecurityForLoanComponent),
      multi: true
    }
  ]

})
export class SecurityForLoanComponent implements ControlValueAccessor {
  securityforloan: string = '';
  onChange: (securityforloan: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(securityforloan: string): void {
    this.securityforloan = securityforloan;
  }

  registerOnChange(fn: (securityforloan: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(securityforloan: string): void {
    this.securityforloan = securityforloan;
    this.onChange(securityforloan);
    this.onTouched();
  }
}


