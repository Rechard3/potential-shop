import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsService } from 'src/app/core/forms/forms.service';
import { UserForm } from '../forms/user.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    public formDef: UserForm,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {}
  form = this.fb.group({});
  model = {};

  ngOnInit(): void {}

  signUp() {}

  loginFacebook() {
    this.snackbar.open('This feature is not ready just yet', 'OK', {
      duration: 2000,
    });
  }
}
