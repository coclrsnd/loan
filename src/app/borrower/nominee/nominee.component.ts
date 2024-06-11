import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-nominee',
  standalone: true,
  imports: [],
  templateUrl: './nominee.component.html',
  styleUrl: './nominee.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NomineeComponent),
      multi: true
    }
  ]
})
export class NomineeComponent implements ControlValueAccessor {
  nominee: string = '';
  onChange: (nominee: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(nominee: string): void {
    this.nominee = nominee;
  }

  registerOnChange(fn: (nominee: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(nominee: string): void {
    this.nominee = nominee;
    this.onChange(nominee);
    this.onTouched();
  }
}
