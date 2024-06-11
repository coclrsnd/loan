import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements ControlValueAccessor {
  date: string = '';
  onChange: (date: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(date: string): void {
    this.date = date;
  }

  registerOnChange(fn: (date: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(date: string): void {
    this.date = date;
    this.onChange(date);
    this.onTouched();
  }
}