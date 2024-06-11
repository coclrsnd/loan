import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-annualincome',
  standalone: true,
  imports: [],
  templateUrl: './annualincome.component.html',
  styleUrl: './annualincome.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnnualincomeComponent),
      multi: true
    }
  ]
})
export class AnnualincomeComponent implements ControlValueAccessor {
  annualincome: string = '';
  onChange: (annualincome: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(annualincome: string): void {
    this.annualincome = annualincome;
  }

  registerOnChange(fn: (annualincome: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(annualincome: string): void {
    this.annualincome = annualincome;
    this.onChange(annualincome);
    this.onTouched();
  }
}



