import React, {useEffect, useState} from 'react';
import './UserTable.css';
import User from "../../model/User";

interface IUserTableProps
{
    users: User[],
    onDeleteUser(user: User): void
}

function UserTable(props: IUserTableProps) {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => setUsers(props.users), [props.users]);

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => props.onDeleteUser(user)} >Delete</button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}

export default UserTable;
