import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserForm } from '../forms/user.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public formDef: UserForm, private fb: FormBuilder) { }

  form = this.fb.group({});
  model = {};

  ngOnInit(): void {
  }

}
