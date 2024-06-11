import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-address',
  standalone: true,
  imports: [],
  templateUrl: './borrower-address.component.html',
  styleUrl: './borrower-address.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerAddressComponent),
      multi: true
    }
  ]
})
export class BorrowerAddressComponent implements ControlValueAccessor {
  residentaddress: any = [];
  onChange: (residentaddress: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(residentaddress: any): void {
    this.residentaddress = residentaddress;
  }

  registerOnChange(fn: (residentaddress: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(residentaddress: any): void {
    this.residentaddress = residentaddress;
    this.onChange(residentaddress);
    this.onTouched();
  }
}