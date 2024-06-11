import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ssh-otherbank-details',
  standalone: true,
  imports: [],
  templateUrl: './ssh-otherbank-details.component.html',
  styleUrl: './ssh-otherbank-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SshOtherbankDetailsComponent),
      multi: true
    }
  ]
})
export class SshOtherbankDetailsComponent implements ControlValueAccessor {
  sshotherbankdetails: string = '';
  onChange: (sshotherbankdetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(sshotherbankdetails: string): void {
    this.sshotherbankdetails = sshotherbankdetails;
  }

  registerOnChange(fn: (sshotherbankdetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(sshotherbankdetails: string): void {
    this.sshotherbankdetails = sshotherbankdetails;
    this.onChange(sshotherbankdetails);
    this.onTouched();
  }
}




