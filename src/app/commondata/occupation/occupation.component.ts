import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-occupation',
  standalone: true,
  imports: [],
  templateUrl: './occupation.component.html',
  styleUrl: './occupation.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OccupationComponent),
      multi: true
    }
  ]
})
export class OccupationComponent implements ControlValueAccessor {
  occupation: string = '';
  onChange: (occupation: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(occupation: string): void {
    this.occupation = occupation;
  }

  registerOnChange(fn: (occupation: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(occupation: string): void {
    this.occupation = occupation;
    this.onChange(occupation);
    this.onTouched();
  }
}
