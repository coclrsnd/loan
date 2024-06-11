import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-fsh-parent',
  standalone: true,
  imports: [],
  templateUrl: './fsh-parent.component.html',
  styleUrl: './fsh-parent.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshParentComponent),
      multi: true
    }
  ]
})
export class FshParentComponent implements ControlValueAccessor {
  fshparentname: string = '';
  onChange: (fshparentname: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshparentname: string): void {
    this.fshparentname = fshparentname;
  }

  registerOnChange(fn: (fshparentname: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshparentname: string): void {
    this.fshparentname = fshparentname;
    this.onChange(fshparentname);
    this.onTouched();
  }
}






