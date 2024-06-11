import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-place',
  standalone: true,
  imports: [],
  templateUrl: './ssh-place.component.html',
  styleUrl: './ssh-place.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshPlaceComponent),
      multi: true
    }
  ]
})
export class SshPlaceComponent implements ControlValueAccessor {
  sshresidentialaddress: string = '';
  onChange: (sshresidentialaddress: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshresidentialaddress: string): void {
    this.sshresidentialaddress = sshresidentialaddress;
  }

  registerOnChange(fn: (sshresidentialaddress: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshresidentialaddress: string): void {
    this.sshresidentialaddress = sshresidentialaddress;
    this.onChange(sshresidentialaddress);
    this.onTouched();
  }
}




