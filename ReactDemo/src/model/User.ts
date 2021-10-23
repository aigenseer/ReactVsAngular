export interface IUser{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export default class User {

  private readonly _id: number;
  private readonly _email: string;
  private readonly _first_name: string;
  private readonly _last_name: string;

  constructor(id: number, email: string, first_name: string, last_name: string){
    this._id = id;
    this._email = email;
    this._first_name = first_name;
    this._last_name = last_name;
  }

  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get first_name(): string {
    return this._first_name;
  }

  get last_name(): string {
    return this._last_name;
  }

}
