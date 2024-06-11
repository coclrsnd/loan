import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-saving-account-number',
  standalone: true,
  imports: [],
  templateUrl: './saving-account-number.component.html',
  styleUrl: './saving-account-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SavingAccountNumberComponent),
      multi: true
    }
  ]
})
export class SavingAccountNumberComponent implements ControlValueAccessor {
  savingsaccount: string = '';
  onChange: (savingsaccount: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(savingsaccount: string): void {
    this.savingsaccount = savingsaccount;
  }

  registerOnChange(fn: (savingsaccount: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(savingsaccount: string): void {
    this.savingsaccount = savingsaccount;
    this.onChange(savingsaccount);
    this.onTouched();
  }
}