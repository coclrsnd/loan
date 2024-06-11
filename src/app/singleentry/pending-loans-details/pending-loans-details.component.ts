import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pending-loans-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pending-loans-details.component.html',
  styleUrl: './pending-loans-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PendingLoansDetailsComponent),
      multi: true
    }
  ]
})
export class PendingLoansDetailsComponent implements ControlValueAccessor {
  pendingloandetails: string = '';
  onChange: (pendingloandetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(pendingloandetails: string): void {
    this.pendingloandetails = pendingloandetails;
  }

  registerOnChange(fn: (pendingloandetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(pendingloandetails: string): void {
    this.pendingloandetails = pendingloandetails;
    this.onChange(pendingloandetails);
    this.onTouched();
  }
}




