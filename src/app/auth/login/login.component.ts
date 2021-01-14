import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserForm } from '../forms/user.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public formDef: UserForm,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  form = this.fb.group({});
  model = {};

  ngOnInit(): void {}

  loginWithFacebook() {
    this.snackbar.open("This feature is not implemented just yet", "OK");
  }

  login(){
    this.snackbar.open("This feature is not implemented just yet", "OK");
  }

  forgotPassword(){
    this.snackbar.open("This feature is not implemented just yet", "OK");
  }
}
