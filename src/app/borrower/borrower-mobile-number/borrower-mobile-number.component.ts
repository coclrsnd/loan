import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-mobile-number',
  standalone: true,
  imports: [],
  templateUrl: './borrower-mobile-number.component.html',
  styleUrl: './borrower-mobile-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerMobileNumberComponent),
      multi: true
    }
  ]
})
export class BorrowerMobileNumberComponent implements ControlValueAccessor {
  mobile: string = '';
  onChange: (mobile: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(mobile: string): void {
    this.mobile = mobile;
  }

  registerOnChange(fn: (mobile: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(mobile: string): void {
    this.mobile = mobile;
    this.onChange(mobile);
    this.onTouched();
  }
}
