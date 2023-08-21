import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/services/validator.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private passwordValidator: PasswordValidator) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      person: new FormGroup({
        account: new FormControl('User1', [
          Validators.required,
          this.user1Check,
        ]),
        password: new FormControl(
          '1111',
          [Validators.required],
          [this.passwordValidator.validate.bind(this.passwordValidator)]
        ),
      }),
      member: new FormArray([new FormControl('Aka'), new FormControl('Yun')]),
    });
  }

  get account() {
    return this.form.get('person')?.get('account');
  }
  get member() {
    return (this.form?.get('member') as FormArray).controls;
  }

  user1Check(control: FormControl): { [s: string]: boolean } | null {
    return control.value === 'User1' ? null : { notUser1: true };
  }
}
