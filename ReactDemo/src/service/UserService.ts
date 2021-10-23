import axios from "axios";
import User, {IUser} from "../model/User";


export class UserService {

    private static apiURL = 'https://reqres.in/api/';

    public static getUsers(): Promise<User[]>{
        return axios.get<IUser[]>(UserService.apiURL+"users?page=2")
            .then((response: any) => {
                let users = response.data.data.map((e: IUser) => new User(e.id, e.email, e.first_name, e.last_name));
                return Promise.resolve(users);
            }
        );
    }

}