import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-fsh-relation',
  standalone: true,
  imports: [],
  templateUrl: './fsh-relation.component.html',
  styleUrl: './fsh-relation.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FshRelationComponent),
      multi: true
    }
  ]
})
export class FshRelationComponent implements ControlValueAccessor {
  fshrelation: string = '';
  onChange: (fshrelation: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(fshrelation: string): void {
    this.fshrelation = fshrelation;
  }

  registerOnChange(fn: (fshrelation: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(fshrelation: string): void {
    this.fshrelation = fshrelation;
    this.onChange(fshrelation);
    this.onTouched();
  }
}





