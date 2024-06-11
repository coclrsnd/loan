import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-annual-expenditure',
  standalone: true,
  imports: [],
  templateUrl: './annual-expenditure.component.html',
  styleUrl: './annual-expenditure.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnnualExpenditureComponent),
      multi: true
    }
  ]
})
export class AnnualExpenditureComponent implements ControlValueAccessor {
  annualexpenditure: string = '';
  onChange: (annualexpenditure: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(annualexpenditure: string): void {
    this.annualexpenditure = annualexpenditure;
  }

  registerOnChange(fn: (annualexpenditure: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(annualexpenditure: string): void {
    this.annualexpenditure = annualexpenditure;
    this.onChange(annualexpenditure);
    this.onTouched();
  }
}



