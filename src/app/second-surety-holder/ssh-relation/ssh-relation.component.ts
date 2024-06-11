import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-relation',
  standalone: true,
  imports: [],
  templateUrl: './ssh-relation.component.html',
  styleUrl: './ssh-relation.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshRelationComponent),
      multi: true
    }
  ]
})
export class SshRelationComponent implements ControlValueAccessor {
  sshrelation: string = '';
  onChange: (sshrelation: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshrelation: string): void {
    this.sshrelation = sshrelation;
  }

  registerOnChange(fn: (sshrelation: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshrelation: string): void {
    this.sshrelation = sshrelation;
    this.onChange(sshrelation);
    this.onTouched();
  }
}





