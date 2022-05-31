import axios from 'axios';


const usersService = axios.create({
    baseURL: 'https://62928d9a4e324aacf6dc833a.endapi.io',
    timeout: 5500
});

export const getUsersFromService = async () => {
    let res = await usersService.get('/users');
    return res.data.data;
}

export const addUserFromService = async (user) => {
    let res = await usersService.post('/users', user);
    return res.data.data;
}

export const deleteUserFromService = async (userId) => {
    await usersService.delete(`/users/${userId}`);
}

export const editUserFromService = async (user) => {
    await usersService.put(`/users/${user.id}`, user);
}


export default usersService;