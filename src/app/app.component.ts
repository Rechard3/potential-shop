import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthActions } from './auth/store/auth.actions';
import { AuthState } from './auth/store/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';
  /**
   *
   */
  constructor(private store: Store, private permissions: NgxPermissionsService) {}
  ngOnInit() {
    this.store.dispatch(new AuthActions.AuthenticateUser({username: "", password: ""}));
    this.store.select(AuthState.roles).subscribe(roles=>{
      this.permissions.loadPermissions(roles);
    })
  }
}
