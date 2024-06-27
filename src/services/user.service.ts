import {urlBuilder} from "@/services/api.service";

const userService = {

    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(urlBuilder.allUsers())
            .then(value=> value.json());
        console.log(users);
        return users;
    },

    getUserById: async (id: string | number): Promise<IUser | null> => {
        let user: IUser = await fetch(urlBuilder.singleUser(id))
            .then(value=> value.json());
        console.log(user);
        return user;
    }
}

export {
    userService
}