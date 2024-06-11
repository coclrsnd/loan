import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-fsh-mobile-number',
  standalone: true,
  imports: [],
  templateUrl: './fsh-mobile-number.component.html',
  styleUrl: './fsh-mobile-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshMobileNumberComponent),
      multi: true
    }
  ]
})
export class FshMobileNumberComponent implements ControlValueAccessor {
  fshmobile: string = '';
  onChange: (fshmobile: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshmobile: string): void {
    this.fshmobile = fshmobile;
  }

  registerOnChange(fn: (fshmobile: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshmobile: string): void {
    this.fshmobile = fshmobile;
    this.onChange(fshmobile);
    this.onTouched();
  }
}






