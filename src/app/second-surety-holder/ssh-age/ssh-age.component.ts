import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-age',
  standalone: true,
  imports: [],
  templateUrl: './ssh-age.component.html',
  styleUrl: './ssh-age.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshAgeComponent),
      multi: true
    }
  ]
})
export class SshAgeComponent implements ControlValueAccessor {
  sshage: string = '';
  onChange: (sshage: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshage: string): void {
    this.sshage = sshage;
  }

  registerOnChange(fn: (sshage: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshage: string): void {
    this.sshage = sshage;
    this.onChange(sshage);
    this.onTouched();
  }
}



