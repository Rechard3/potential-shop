

export namespace AuthActions {
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
}