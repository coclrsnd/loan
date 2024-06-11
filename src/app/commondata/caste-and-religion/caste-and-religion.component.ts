import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-caste-and-religion',
  standalone: true,
  imports: [],
  templateUrl: './caste-and-religion.component.html',
  styleUrl: './caste-and-religion.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CasteAndReligionComponent),
      multi: true
    }
  ]
})
export class CasteAndReligionComponent implements ControlValueAccessor {
  casteandreligion: string = '';
  onChange: (casteandreligion: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(casteandreligion: string): void {
    this.casteandreligion = casteandreligion;
  }

  registerOnChange(fn: (casteandreligion: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(casteandreligion: string): void {
    this.casteandreligion = casteandreligion;
    this.onChange(casteandreligion);
    this.onTouched();
  }
}

