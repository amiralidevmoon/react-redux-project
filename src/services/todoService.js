import axios from 'axios';


const todoService = axios.create({
    baseURL: 'https://629f1859e67470ca4deca060.endapi.io',
    timeout: 5500
});

export const getTodosFromService = async () => {
    let res = await todoService.get('/todos');
    return res.data.data;
}

export const addTodoFromService = async (todo) => {
    let res = await todoService.post('/todos', todo);
    return res.data.data;
}

export const deleteTodoFromService = async (todoId) => {
    await todoService.delete(`/todos/${todoId}`);
}

export const editTodoFromService = async (todo) => {
    let res = await todoService.put(`/todos/${todo.id}`, todo);
    return res.data.data;
}

export default todoService;