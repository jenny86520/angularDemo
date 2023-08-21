import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PasswordValidator implements AsyncValidator {
  constructor(private apiService: ApiService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.apiService.getValidationResult(control.value).pipe(
      map((isSave) => (isSave ? null : { passwordSave: true })),
      catchError(() => of(null))
    );
  }
}
