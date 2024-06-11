import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-loan-amount',
  standalone: true,
  imports: [],
  templateUrl: './loan-amount.component.html',
  styleUrl: './loan-amount.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoanAmountComponent),
      multi: true
    }
  ]
})
export class LoanAmountComponent implements ControlValueAccessor {
  loanamount: string = '';
  onChange: (loanamount: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(loanamount: string): void {
    this.loanamount = loanamount;
  }

  registerOnChange(fn: (loanamount: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(loanamount: string): void {
    this.loanamount = loanamount;
    this.onChange(loanamount);
    this.onTouched();
  }
}