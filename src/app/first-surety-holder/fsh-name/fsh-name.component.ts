import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-fsh-name',
  standalone: true,
  imports: [],
  templateUrl: './fsh-name.component.html',
  styleUrl: './fsh-name.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshNameComponent),
      multi: true
    }
  ]

})
export class FshNameComponent implements ControlValueAccessor {
  fshname: string = '';
  onChange: (fshname: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshname: string): void {
    this.fshname = fshname;
  }

  registerOnChange(fn: (fshname: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshname: string): void {
    this.fshname = fshname;
    this.onChange(fshname);
    this.onTouched();
  }
}





