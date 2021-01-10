import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from 'src/app/models/user.model';
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
  roles: ["admin", "marketing"],
};

type Ctx = StateContext<AuthStateModel>;

@State({
  name: 'auth',
  defaults: defaultState,
})
@Injectable()
export class AuthState {

  @Selector()
  static roles(state: AuthStateModel){
    return state.roles;
  }

  @Action(actions.AuthenticateUser)
  authenticateUser(ctx: Ctx, { payload }: actions.AuthenticateUser) {
    ctx.setState({
      ...defaultState,
      cookie: "",
      authenticated: true,
      user: {
        _id: null,
        dateofbirth: null,
        email: null,
        firstName: null,
        lastName: null,
        username: null,
        password: null,
      },
    });
  }

  @Action(actions.SetCookie)
  setCookie(ctx: Ctx, {payload}: actions.SetCookie){
      ctx.patchState({cookie: payload});
  }
}
