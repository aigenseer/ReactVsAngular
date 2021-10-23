import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import User from "../../model/User";
import {UserService} from "../../service/UserService";
import UserTable from "../user-table/UserTable";

function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        UserService.getUsers().then(setUsers);
    }, []);

    function handleDeleteUser(user: User){
        setUsers(users.filter(u => u.id !== user.id));
    }

    return (
        <div className="app" >
          <div className="toolbar" role="banner" >
            <img
                width="40"
                alt="React Logo"
                src={logo}
            />
            <span>React Demo</span>
            <div className="spacer"/>
          </div>
          <div className="content" role="main">
                <UserTable users={users} onDeleteUser={handleDeleteUser} />
          </div>
        </div>
    );
}

export default App;
