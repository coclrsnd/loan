import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-fsh-address',
  standalone: true,
  imports: [],
  templateUrl: './fsh-address.component.html',
  styleUrl: './fsh-address.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshAddressComponent),
      multi: true
    }
  ]
})
export class FshAddressComponent implements ControlValueAccessor {
  fshofficeaddress: string = '';
  onChange: (fshofficeaddress: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshofficeaddress: string): void {
    this.fshofficeaddress = fshofficeaddress;
  }

  registerOnChange(fn: (fshofficeaddress: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshofficeaddress: string): void {
    this.fshofficeaddress = fshofficeaddress;
    this.onChange(fshofficeaddress);
    this.onTouched();
  }
}




