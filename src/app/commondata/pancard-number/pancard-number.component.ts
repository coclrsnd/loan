import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-pancard-number',
  standalone: true,
  imports: [],
  templateUrl: './pancard-number.component.html',
  styleUrl: './pancard-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PancardNumberComponent),
      multi: true
    }
  ]
})
export class PancardNumberComponent implements ControlValueAccessor {
  pancardnumber: string = '';
  onChange: (pancardnumber: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(pancardnumber: string): void {
    this.pancardnumber = pancardnumber;
  }

  registerOnChange(fn: (pancardnumber: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(pancardnumber: string): void {
    this.pancardnumber = pancardnumber;
    this.onChange(pancardnumber);
    this.onTouched();
  }
}