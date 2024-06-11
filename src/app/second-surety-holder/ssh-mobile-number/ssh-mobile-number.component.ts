import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-mobile-number',
  standalone: true,
  imports: [],
  templateUrl: './ssh-mobile-number.component.html',
  styleUrl: './ssh-mobile-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshMobileNumberComponent),
      multi: true
    }
  ]
})
export class SshMobileNumberComponent implements ControlValueAccessor {
  sshmobile: string = '';
  onChange: (sshmobile: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshmobile: string): void {
    this.sshmobile = sshmobile;
  }

  registerOnChange(fn: (sshmobile: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshmobile: string): void {
    this.sshmobile = sshmobile;
    this.onChange(sshmobile);
    this.onTouched();
  }
}



