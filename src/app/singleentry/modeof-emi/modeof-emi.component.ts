import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modeof-emi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modeof-emi.component.html',
  styleUrl: './modeof-emi.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModeofEMIComponent),
      multi: true
    }
  ]

})
export class ModeofEMIComponent implements ControlValueAccessor {
  odeofemi: string = '';
  onChange: (odeofemi: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(odeofemi: string): void {
    this.odeofemi = odeofemi;
  }

  registerOnChange(fn: (odeofemi: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(odeofemi: string): void {
    this.odeofemi = odeofemi;
    this.onChange(odeofemi);
    this.onTouched();
  }
}



