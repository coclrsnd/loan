import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-address',
  standalone: true,
  imports: [],
  templateUrl: './ssh-address.component.html',
  styleUrl: './ssh-address.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshAddressComponent),
      multi: true
    }
  ]
})
export class SshAddressComponent implements ControlValueAccessor {
  sshofficeaddress: string = '';
  onChange: (sshofficeaddress: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshofficeaddress: string): void {
    this.sshofficeaddress = sshofficeaddress;
  }

  registerOnChange(fn: (sshofficeaddress: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshofficeaddress: string): void {
    this.sshofficeaddress = sshofficeaddress;
    this.onChange(sshofficeaddress);
    this.onTouched();
  }
}




