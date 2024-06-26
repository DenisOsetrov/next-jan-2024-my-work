import React from 'react';

interface IUser {
    name: string;
    id: number;
}

const UsersPage = async () => {

    let allUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    return (
        <div>
            <ul>
                {allUsers.map((user: IUser) => (
                    <li key={user.id}>
                        {user.id} {user.name}
                    </li>))}
            </ul>
        </div>
    );
};

export default UsersPage;