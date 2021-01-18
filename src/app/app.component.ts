import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, Subscription } from 'rxjs';
import { concatAll, map, tap } from 'rxjs/operators';
import { AuthActions } from './auth/store/auth.actions';
import { AuthState, AuthStateModel } from './auth/store/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  tabs = [
    { path: ['/', 'admin'], displayName: 'Admin' },
    { path: ['/', 'shop'], displayName: 'Shop' },
    { path: ['/', 'cart'], displayName: 'My eCart' },
  ];

  activePath = '';
  subscriptions = new Subscription();
  @Select(AuthState) auth: Observable<AuthStateModel>;

  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private permissions: NgxPermissionsService
  ) {}

  ngOnInit() {
    this.store.select(AuthState.roles).subscribe((roles) => {
      this.permissions.loadPermissions(roles);
    });
  }

  registerActionHandlers(){
    
  }
}
