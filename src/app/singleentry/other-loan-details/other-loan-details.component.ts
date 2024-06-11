import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-other-loan-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './other-loan-details.component.html',
  styleUrl: './other-loan-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OtherLoanDetailsComponent),
      multi: true
    }
  ]
})
export class OtherLoanDetailsComponent implements ControlValueAccessor {
  otherloandetails: string = '';
  onChange: (otherloandetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(otherloandetails: string): void {
    this.otherloandetails = otherloandetails;
  }

  registerOnChange(fn: (otherloandetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(otherloandetails: string): void {
    this.otherloandetails = otherloandetails;
    this.onChange(otherloandetails);
    this.onTouched();
  }
}




