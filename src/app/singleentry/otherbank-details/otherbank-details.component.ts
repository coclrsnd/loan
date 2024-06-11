import { Component,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otherbank-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otherbank-details.component.html',
  styleUrl: './otherbank-details.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OtherbankDetailsComponent),
      multi: true
    }
  ]
})
export class OtherbankDetailsComponent implements ControlValueAccessor {
  otherbankdetails: string = '';
  onChange: (otherbankdetails: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(otherbankdetails: string): void {
    this.otherbankdetails = otherbankdetails;
  }

  registerOnChange(fn: (otherbankdetails: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(otherbankdetails: string): void {
    this.otherbankdetails = otherbankdetails;
    this.onChange(otherbankdetails);
    this.onTouched();
  }
}




