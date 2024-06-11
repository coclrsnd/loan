import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-name',
  standalone: true,
  imports: [],
  templateUrl: './ssh-name.component.html',
  styleUrl: './ssh-name.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshNameComponent),
      multi: true
    }
  ]
})
export class SshNameComponent implements ControlValueAccessor {
  sshname: string = '';
  onChange: (sshname: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshname: string): void {
    this.sshname = sshname;
  }

  registerOnChange(fn: (sshname: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshname: string): void {
    this.sshname = sshname;
    this.onChange(sshname);
    this.onTouched();
  }
}




