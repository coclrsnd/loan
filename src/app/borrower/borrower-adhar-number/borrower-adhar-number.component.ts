import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-adhar-number',
  standalone: true,
  imports: [],
  templateUrl: './borrower-adhar-number.component.html',
  styleUrl: './borrower-adhar-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerAdharNumberComponent),
      multi: true
    }
  ]
})
export class BorrowerAdharNumberComponent implements ControlValueAccessor {
  adhar: string = '';
  onChange: (adhar: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(adhar: string): void {
    this.adhar = adhar;
  }

  registerOnChange(fn: (adhar: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(adhar: string): void {
    this.adhar = adhar;
    this.onChange(adhar);
    this.onTouched();
  }
}