import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-fsh-place',
  standalone: true,
  imports: [],
  templateUrl: './fsh-place.component.html',
  styleUrl: './fsh-place.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshPlaceComponent),
      multi: true
    }
  ]
})
export class FshPlaceComponent implements ControlValueAccessor {
  fshresidentialaddress: string = '';
  onChange: (fshresidentialaddress: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshresidentialaddress: string): void {
    this.fshresidentialaddress = fshresidentialaddress;
  }

  registerOnChange(fn: (fshresidentialaddress: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshresidentialaddress: string): void {
    this.fshresidentialaddress = fshresidentialaddress;
    this.onChange(fshresidentialaddress);
    this.onTouched();
  }
}



