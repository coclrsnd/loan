import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-over-due-interestrate',
  standalone: true,
  imports: [],
  templateUrl: './over-due-interestrate.component.html',
  styleUrl: './over-due-interestrate.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OverDueInterestrateComponent),
      multi: true
    }
  ]
})
export class OverDueInterestrateComponent implements ControlValueAccessor {
  overdueinterestrate: string = '';
  onChange: (overdueinterestrate: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(overdueinterestrate: string): void {
    this.overdueinterestrate = overdueinterestrate;
  }

  registerOnChange(fn: (overdueinterestrate: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(overdueinterestrate: string): void {
    this.overdueinterestrate = overdueinterestrate;
    this.onChange(overdueinterestrate);
    this.onTouched();
  }
}
