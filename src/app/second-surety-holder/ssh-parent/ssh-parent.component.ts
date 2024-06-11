import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-parent',
  standalone: true,
  imports: [],
  templateUrl: './ssh-parent.component.html',
  styleUrl: './ssh-parent.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshParentComponent),
      multi: true
    }
  ]
})
export class SshParentComponent implements ControlValueAccessor {
  sshparentname: string = '';
  onChange: (sshparentname: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshparentname: string): void {
    this.sshparentname = sshparentname;
  }

  registerOnChange(fn: (sshparentname: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshparentname: string): void {
    this.sshparentname = sshparentname;
    this.onChange(sshparentname);
    this.onTouched();
  }
}




