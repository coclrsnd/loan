import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-membership-number',
  standalone: true,
  imports: [],
  templateUrl: './membership-number.component.html',
  styleUrl: './membership-number.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MembershipNumberComponent),
      multi: true
    }
  ]
})
export class MembershipNumberComponent implements ControlValueAccessor {
  membershipnumber: string = '';
  onChange: (membershipnumber: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(membershipnumber: string): void {
    this.membershipnumber = membershipnumber;
  }

  registerOnChange(fn: (membershipnumber: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(membershipnumber: string): void {
    this.membershipnumber = membershipnumber;
    this.onChange(membershipnumber);
    this.onTouched();
  }
}