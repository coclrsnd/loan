import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-borrower-parentname',
  standalone: true,
  imports: [],
  templateUrl: './borrower-parentname.component.html',
  styleUrl: './borrower-parentname.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BorrowerParentnameComponent),
      multi: true
    }
  ]
})
export class BorrowerParentnameComponent implements ControlValueAccessor {
  parentname: string = '';
  onChange: (parentname: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(parentname: string): void {
    this.parentname = parentname;
  }

  registerOnChange(fn: (parentname: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(parentname: string): void {
    this.parentname = parentname;
    this.onChange(parentname);
    this.onTouched();
  }
}
