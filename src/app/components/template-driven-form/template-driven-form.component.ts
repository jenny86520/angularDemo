import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  // 使用 ViewChild 寫法比較偏 Reactive Form
  @ViewChild('form') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    console.log('NgForm', form);
    console.log('Value', form.value);
  }

  reset() {
    this.form.reset();
    console.log(this.form);
  }

  resetForm() {
    this.form.resetForm();
    console.log(this.form);
  }

  setValue() {
    this.form.setValue({ person: { account: 'User1', password: '1111' } });
  }

  setAccount() {
    this.form.form.patchValue({ person: { account: 'User1_by_set' } });
  }
}
