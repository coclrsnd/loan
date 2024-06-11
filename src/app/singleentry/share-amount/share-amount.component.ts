import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './share-amount.component.html',
  styleUrl: './share-amount.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShareAmountComponent),
      multi: true
    }
  ]
})
export class ShareAmountComponent implements ControlValueAccessor {
  shareamount: string = '';
  onChange: (shareamount: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(shareamount: string): void {
    this.shareamount = shareamount;
  }

  registerOnChange(fn: (shareamount: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(shareamount: string): void {
    this.shareamount = shareamount;
    this.onChange(shareamount);
    this.onTouched();
  }
}




