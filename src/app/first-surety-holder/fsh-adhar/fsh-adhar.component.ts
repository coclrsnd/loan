import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-fsh-adhar',
  standalone: true,
  imports: [],
  templateUrl: './fsh-adhar.component.html',
  styleUrl: './fsh-adhar.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshAdharComponent),
      multi: true
    }
  ]
})
export class FshAdharComponent implements ControlValueAccessor {
  fshadhar: string = '';
  onChange: (fshadhar: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshadhar: string): void {
    this.fshadhar = fshadhar;
  }

  registerOnChange(fn: (fshadhar: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshadhar: string): void {
    this.fshadhar = fshadhar;
    this.onChange(fshadhar);
    this.onTouched();
  }
}







