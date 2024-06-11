import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-name',
  standalone: true,
  imports: [],
  templateUrl: './borrower-name.component.html',
  styleUrl: './borrower-name.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerNameComponent),
      multi: true
    }
  ]
})
export class BorrowerNameComponent implements ControlValueAccessor {
  name: string = '';
  onChange: (name: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(name: string): void {
    this.name = name;
  }

  registerOnChange(fn: (name: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(name: string): void {
    this.name = name;
    this.onChange(name);
    this.onTouched();
  }
}
