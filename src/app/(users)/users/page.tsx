import React from 'react';
import {userService} from "@/services/user.service";
import UserComponent from "@/components/UserComponent";


const UsersPage = async () =>{

    let users = await userService.getAllUsers();

    return (
        <div>
            <h3>This is a users page</h3>
            <ul>
                {users.map((user: IUser) => (
                    <li key={user.id}>
                        <UserComponent user={user}/>
                    </li>))}
            </ul>
        </div>
    );
};

export default UsersPage;