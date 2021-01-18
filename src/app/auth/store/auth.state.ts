import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import produce from 'immer';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';
import { AuthActions as actions } from './auth.actions';

export interface AuthStateModel {
  /** whether the user has been authenticated or not */
  authenticated: boolean;
  /** the user object */
  user: User;
  /** the cookie attached to the user */
  cookie: string;
  /** the set of roles this user has */
  roles: string[];
}

const defaultState: AuthStateModel = {
  authenticated: false,
  user: null,
  cookie: null,
  roles: ['admin', 'marketing'],
};

type Ctx = StateContext<AuthStateModel>;

@State({
  name: 'auth',
  defaults: defaultState,
})
@Injectable()
export class AuthState {
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {}

  @Selector()
  static roles(state: AuthStateModel) {
    return state.roles;
  }

  @Action(actions.AuthenticateUser)
  authenticateUser(ctx: Ctx, { payload }: actions.AuthenticateUser) {
    return this.authService.authenticate(payload).pipe(
      tap((resp) => {
        ctx.setState(
          produce(ctx.getState(), (state) => {
            state.authenticated = true;
            state.user = resp.data;
            return state;
          })
        );
      })
    );
  }

  @Action(actions.SetCookie)
  setCookie(ctx: Ctx, { payload }: actions.SetCookie) {
    ctx.patchState({ cookie: payload });
  }

  @Action(actions.SignupUser)
  signupUser(ctx: Ctx, { payload }: actions.SignupUser) {
    return this.authService.registerUser(payload).pipe(
      tap((resp) => {
        ctx.dispatch(new actions.AuthenticateUser(payload));
      })
    );
  }

  @Action(actions.RouteUnauthorized)
  unAuthorizeUser(ctx: Ctx) {
    return this.router.navigateByUrl('/auth/login');
  }
}
