import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-loan-purpose',
  standalone: true,
  imports: [],
  templateUrl: './loan-purpose.component.html',
  styleUrl: './loan-purpose.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoanPurposeComponent),
      multi: true
    }
  ]
})
export class LoanPurposeComponent implements ControlValueAccessor {
  loanpurpose: string = '';
  onChange: (loanpurpose: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(loanpurpose: string): void {
    this.loanpurpose = loanpurpose;
  }

  registerOnChange(fn: (loanpurpose: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(loanpurpose: string): void {
    this.loanpurpose = loanpurpose;
    this.onChange(loanpurpose);
    this.onTouched();
  }
}