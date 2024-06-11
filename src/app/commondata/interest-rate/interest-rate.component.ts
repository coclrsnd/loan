import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-interest-rate',
  standalone: true,
  imports: [],
  templateUrl: './interest-rate.component.html',
  styleUrl: './interest-rate.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InterestRateComponent),
      multi: true
    }
  ]
})
export class InterestRateComponent implements ControlValueAccessor {
  interestrate: string = '';
  onChange: (interestrate: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(interestrate: string): void {
    this.interestrate = interestrate;
  }

  registerOnChange(fn: (interestrate: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(interestrate: string): void {
    this.interestrate = interestrate;
    this.onChange(interestrate);
    this.onTouched();
  }
}
