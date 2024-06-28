import React from 'react';
import {userService} from "@/services/user.service";

type Params = {id: string};

const UserPage = async ({params}: {params:Params}) => {

    const user = await userService.getUserById(params.id);

    return (
        <div>
            <h4>{user?.id}. {user?.name}</h4>
            <h5>Email: {user?.email}</h5>
            <h5>Username: {user?.username}</h5>
        </div>
    );
};

export default UserPage;