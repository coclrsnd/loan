import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-fsh-age',
  standalone: true,
  imports: [],
  templateUrl: './fsh-age.component.html',
  styleUrl: './fsh-age.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshAgeComponent),
      multi: true
    }
  ]
})
export class FshAgeComponent implements ControlValueAccessor {
  fshage: string = '';
  onChange: (fshage: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshage: string): void {
    this.fshage = fshage;
  }

  registerOnChange(fn: (fshage: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshage: string): void {
    this.fshage = fshage;
    this.onChange(fshage);
    this.onTouched();
  }
}






