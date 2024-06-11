import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lic-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lic-details.component.html',
  styleUrl: './lic-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LicDetailsComponent),
      multi: true
    }
  ]
})
export class LicDetailsComponent implements ControlValueAccessor {
  licdetails: string = '';
  onChange: (licdetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(licdetails: string): void {
    this.licdetails = licdetails;
  }

  registerOnChange(fn: (licdetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(licdetails: string): void {
    this.licdetails = licdetails;
    this.onChange(licdetails);
    this.onTouched();
  }
}




