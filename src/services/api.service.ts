// базова url, можна в окремий файл!
export const base: string = 'https://jsonplaceholder.typicode.com';

// додаємо до базової url /users і /users/id і створюємо змінні для використання в сервісі.
export const urlBuilder = {
    // users path
    usersBaseUrl: '/users',
    allUsers: () => base + urlBuilder.usersBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.usersBaseUrl + '/' + id,
    // posts path
    postsBaseUrl: '/posts',
    allPosts: () => base + urlBuilder.postsBaseUrl,
    singlePost: (id: string | number) => base + urlBuilder.postsBaseUrl + '/' + id,
    // comments
    commentsBaseUrl: '/comments',
    allComments: () => base + urlBuilder.commentsBaseUrl,
    singleComment: (id: string | number) => base + urlBuilder.commentsBaseUrl + '/' + id,
}

















