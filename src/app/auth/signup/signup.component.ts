import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsService } from 'src/app/core/forms/forms.service';
import { UserForm } from '../forms/user.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public formDef: UserForm, private fb: FormBuilder) {

  }
  form = this.fb.group({});
  model = {};

  ngOnInit(): void {
  }

}
