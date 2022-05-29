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

export default usersService;