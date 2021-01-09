export interface User {
  /** internal primary key of the document */
  _id: string;

  /** the login name to be used by the user
   */
  username: string;

  /** the password used by the user
   */
  password?: string;

  /** email address of the user
   */
  email: string;

  /** first name of the user
   */
  firstName: string;

  /** last name of the user
   */
  lastName: string;

  /** date of birht of the user
   */
  dateofbirth: Date;
}
