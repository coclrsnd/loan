import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-age',
  standalone: true,
  imports: [],
  templateUrl: './borrower-age.component.html',
  styleUrl: './borrower-age.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerAgeComponent),
      multi: true
    }
  ]
})
export class BorrowerAgeComponent implements ControlValueAccessor {
  age: string = '';
  onChange: (age: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(age: string): void {
    this.age = age;
  }

  registerOnChange(fn: (age: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(age: string): void {
    this.age = age;
    this.onChange(age);
    this.onTouched();
  }
}