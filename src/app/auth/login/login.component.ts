import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { UserForm } from '../forms/user.form';
import { AuthActions } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public formDef: UserForm,
    private fb: FormBuilder,
    private store: Store,
    private snackbar: MatSnackBar
  ) {}

  form = this.fb.group({});
  model = {};

  ngOnInit(): void {}

  loginWithFacebook() {
    this.snackbar.open('This feature is not implemented just yet', 'OK');
  }

  login() {
    // this.snackbar.open("This feature is not implemented just yet", "OK");
    this.store.dispatch(
      new AuthActions.AuthenticateUser({
        username: this.form.value['username'],
        password: this.form.value['password'],
      })
    );
  }

  forgotPassword() {
    this.snackbar.open('This feature is not implemented just yet', 'OK');
  }
}
