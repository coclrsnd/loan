import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-adhar',
  standalone: true,
  imports: [],
  templateUrl: './ssh-adhar.component.html',
  styleUrl: './ssh-adhar.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshAdharComponent),
      multi: true
    }
  ]

})
export class SshAdharComponent implements ControlValueAccessor {
  sshadhar: string = '';
  onChange: (sshadhar: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshadhar: string): void {
    this.sshadhar = sshadhar;
  }

  registerOnChange(fn: (sshadhar: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshadhar: string): void {
    this.sshadhar = sshadhar;
    this.onChange(sshadhar);
    this.onTouched();
  }
}



