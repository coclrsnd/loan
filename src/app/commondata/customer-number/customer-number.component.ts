import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-customer-number',
  standalone: true,
  imports: [],
  templateUrl: './customer-number.component.html',
  styleUrl: './customer-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerNumberComponent),
      multi: true
    }
  ]
 
})
export class CustomerNumberComponent implements ControlValueAccessor {
  customernumber: string = '';
  onChange: (customernumber: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(customernumber: string): void {
    this.customernumber = customernumber;
  }

  registerOnChange(fn: (customernumber: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(customernumber: string): void {
    this.customernumber = customernumber;
    this.onChange(customernumber);
    this.onTouched();
  }
}

