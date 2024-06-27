import React from 'react';
import {userService} from "@/services/user.service";

type Params = {id: string};

const Page = async ({params}: {params:Params}) => {

    const user = await userService.getUserById(params.id);

    return (
        <div>
            {user?.id}. {user?.name}. Email: {user?.email}
        </div>
    );
};

export default Page;