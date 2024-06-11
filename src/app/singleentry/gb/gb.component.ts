import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-gb',
  standalone: true,
  imports: [],
  templateUrl: './gb.component.html',
  styleUrl: './gb.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GbComponent),
      multi: true
    }
  ]

})
export class GbComponent implements ControlValueAccessor {
  gb: string = '';
  onChange: (gb: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(gb: string): void {
    this.gb = gb;
  }

  registerOnChange(fn: (gb: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(gb: string): void {
    this.gb = gb;
    this.onChange(gb);
    this.onTouched();
  }
}



