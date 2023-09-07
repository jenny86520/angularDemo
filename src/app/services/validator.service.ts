import { Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PasswordValidator implements AsyncValidator, OnInit {
  log: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAsyncData().subscribe((data) => (this.log = data));
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.apiService.getValidationResult(control.value).pipe(
      map((isSave) => (isSave ? null : { passwordSave: true })),
      catchError(() => of(null))
    );
  }
}
