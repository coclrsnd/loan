import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-fsh-otherbank-details',
  standalone: true,
  imports: [],
  templateUrl: './fsh-otherbank-details.component.html',
  styleUrl: './fsh-otherbank-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshOtherbankDetailsComponent ),
      multi: true
    }
  ]
})
export class FshOtherbankDetailsComponent implements ControlValueAccessor {
  fshotherbankdetails: string = '';
  onChange: (fshotherbankdetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshotherbankdetails: string): void {
    this.fshotherbankdetails = fshotherbankdetails;
  }

  registerOnChange(fn: (fshotherbankdetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshotherbankdetails: string): void {
    this.fshotherbankdetails = fshotherbankdetails;
    this.onChange(fshotherbankdetails);
    this.onTouched();
  }
}






