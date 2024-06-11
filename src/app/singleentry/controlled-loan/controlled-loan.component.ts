import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-controlled-loan',
  standalone: true,
  imports: [],
  templateUrl: './controlled-loan.component.html',
  styleUrl: './controlled-loan.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlledLoanComponent),
      multi: true
    }
  ]
})
export class ControlledLoanComponent implements ControlValueAccessor {
  controlledloan: string = '';
  onChange: (controlledloan: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(controlledloan: string): void {
    this.controlledloan = controlledloan;
  }

  registerOnChange(fn: (controlledloan: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(controlledloan: string): void {
    this.controlledloan = controlledloan;
    this.onChange(controlledloan);
    this.onTouched();
  }
}



