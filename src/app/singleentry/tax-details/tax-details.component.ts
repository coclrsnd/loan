import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tax-details.component.html',
  styleUrl: './tax-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaxDetailsComponent),
      multi: true
    }
  ]
})
export class TaxDetailsComponent implements ControlValueAccessor {
  taxdetails: string = '';
  onChange: (taxdetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(taxdetails: string): void {
    this.taxdetails = taxdetails;
  }

  registerOnChange(fn: (taxdetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(taxdetails: string): void {
    this.taxdetails = taxdetails;
    this.onChange(taxdetails);
    this.onTouched();
  }
}
