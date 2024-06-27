// базова url, можна в окремий файл!
const base: string = 'https://jsonplaceholder.typicode.com';

// додаємо до базової url /users і /users/id і створюємо змінні для використання в сервісі.
const urlBuilder = {
    usersBaseUrl: '/users',
    allUsers: () => base + urlBuilder.usersBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.usersBaseUrl + '/' + id,
}

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















