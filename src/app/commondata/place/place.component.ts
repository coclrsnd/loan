import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NomineeComponent } from '../../borrower/nominee/nominee.component';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [],
  templateUrl: './place.component.html',
  styleUrl: './place.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NomineeComponent),
      multi: true
    }
  ]
})
export class PlaceComponent implements ControlValueAccessor {
  place: string = '';
  onChange: (place: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(place: string): void {
    this.place = place;
  }

  registerOnChange(fn: (place: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(place: string): void {
    this.place = place;
    this.onChange(place);
    this.onTouched();
  }
}
