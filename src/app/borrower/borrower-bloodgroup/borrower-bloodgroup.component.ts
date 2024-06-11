import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-bloodgroup',
  standalone: true,
  imports: [],
  templateUrl: './borrower-bloodgroup.component.html',
  styleUrl: './borrower-bloodgroup.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerBloodgroupComponent),
      multi: true
    }
  ]
})
export class BorrowerBloodgroupComponent implements ControlValueAccessor {
  bloodgroup: string = '';
  onChange: (bloodgroup: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(bloodgroup: string): void {
    this.bloodgroup = bloodgroup;
  }

  registerOnChange(fn: (bloodgroup: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(bloodgroup: string): void {
    this.bloodgroup = bloodgroup;
    this.onChange(bloodgroup);
    this.onTouched();
  }
}