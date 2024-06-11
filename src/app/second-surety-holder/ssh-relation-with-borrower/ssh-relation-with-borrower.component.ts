import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-relation-with-borrower',
  standalone: true,
  imports: [],
  templateUrl: './ssh-relation-with-borrower.component.html',
  styleUrl: './ssh-relation-with-borrower.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshRelationWithBorrowerComponent),
      multi: true
    }
  ]
})
export class SshRelationWithBorrowerComponent implements ControlValueAccessor {
  sshrelationwithborrower: string = '';
  onChange: (sshrelationwithborrower: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshrelationwithborrower: string): void {
    this.sshrelationwithborrower = sshrelationwithborrower;
  }

  registerOnChange(fn: (sshrelationwithborrower: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshrelationwithborrower: string): void {
    this.sshrelationwithborrower = sshrelationwithborrower;
    this.onChange(sshrelationwithborrower);
    this.onTouched();
  }
}
