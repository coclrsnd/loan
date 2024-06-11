import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-fsh-relation-with-borrower',
  standalone: true,
  imports: [],
  templateUrl: './fsh-relation-with-borrower.component.html',
  styleUrl: './fsh-relation-with-borrower.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshRelationWithBorrowerComponent),
      multi: true
    }
  ]
})
export class FshRelationWithBorrowerComponent implements ControlValueAccessor {
  fshrelationwithborrower: string = '';
  onChange: (fshrelationwithborrower: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshrelationwithborrower: string): void {
    this.fshrelationwithborrower = fshrelationwithborrower;
  }

  registerOnChange(fn: (fshrelationwithborrower: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshrelationwithborrower: string): void {
    this.fshrelationwithborrower = fshrelationwithborrower;
    this.onChange(fshrelationwithborrower);
    this.onTouched();
  }
}
