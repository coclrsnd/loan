import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-loan-account-number',
  standalone: true,
  imports: [],
  templateUrl: './loan-account-number.component.html',
  styleUrl: './loan-account-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoanAccountNumberComponent),
      multi: true
    }
  ]
})
export class LoanAccountNumberComponent implements ControlValueAccessor {
  loanaccountnumber: string = '';
  onChange: (loanaccountnumber: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(loanaccountnumber: string): void {
    this.loanaccountnumber = loanaccountnumber;
  }

  registerOnChange(fn: (loanaccountnumber: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(loanaccountnumber: string): void {
    this.loanaccountnumber = loanaccountnumber;
    this.onChange(loanaccountnumber);
    this.onTouched();
  }
}