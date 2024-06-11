import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-office-address',
  standalone: true,
  imports: [],
  templateUrl: './borrower-office-address.component.html',
  styleUrl: './borrower-office-address.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerOfficeAddressComponent),
      multi: true
    }
  ]
})
export class BorrowerOfficeAddressComponent implements ControlValueAccessor {
  officeaddress: any = [];
  onChange: (officeaddress: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(officeaddress: any): void {
    this.officeaddress = officeaddress;
  }

  registerOnChange(fn: (officeaddress: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(officeaddress: any): void {
    this.officeaddress = officeaddress;
    this.onChange(officeaddress);
    this.onTouched();
  }
}
