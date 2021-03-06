import { User } from "src/app/models/user.model";


export namespace AuthActions {

    /** unauthorize the current user, send him to login page */
    export class RouteUnauthorized {
        static readonly type="[AUTH API] Unauthorized";
    }

    /** set the user cookie, if cookie is not verified in backend, then redirect to */
    export class SetCookie {
        static readonly type="[AUTH INIT] set user cookie";
        /**
         * @param payload the cookie to be used in the store
         */
        constructor(public payload: string) {
        }
    }


    /** authenticate the user against credentials */
    export class AuthenticateUser {
        static readonly type="[AUTH LOGIN] Authenticate User";
        /**
         * @param payload the credentials to authenticate
         */
        constructor(public payload: {username: string, password: string}) {
        }
    }


    export class SignupUser{
        static readonly type="[AUTH SIGNUP] signup new user";
        /**
         *
         */
        constructor(public payload: User) {
        }
    }
}