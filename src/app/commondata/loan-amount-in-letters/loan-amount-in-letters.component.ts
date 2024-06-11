import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { LoanAmountComponent } from '../loan-amount/loan-amount.component';

@Component({
  selector: 'app-loan-amount-in-letters',
  standalone: true,
  imports: [],
  templateUrl: './loan-amount-in-letters.component.html',
  styleUrl: './loan-amount-in-letters.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoanAmountInLettersComponent),
      multi: true
    }
  ]
})
export class LoanAmountInLettersComponent implements ControlValueAccessor {
  loanamountinterest: string = '';
  onChange: (loanamountinterest: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(loanamountinterest: string): void {
    this.loanamountinterest = loanamountinterest;
  }

  registerOnChange(fn: (loanamountinterest: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(loanamountinterest: string): void {
    this.loanamountinterest = loanamountinterest;
    this.onChange(loanamountinterest);
    this.onTouched();
  }
}
