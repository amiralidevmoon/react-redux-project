import React, {useState} from 'react';
import {setLoading} from "../../store/slices/loadingSlice";
import {sweetAlert} from "../../helpers/helpers";
import {useDispatch} from "react-redux";
import {addTodoFromService} from "../../services/todoService";
import {addTodo} from "../../store/slices/todoSlice";

function Create() {
    const [todo, setTodo] = useState({
        title: '',
        status: false
    });

    const dispatch = useDispatch();

    const createTodoHandler = async () => {
        dispatch(setLoading(true));

        if (todo) {
            try {
                let newTodo = await addTodoFromService(todo);
                dispatch(addTodo(newTodo));
                setTodo({});
                dispatch(setLoading(false));
                sweetAlert('کاربر موردنظر با موفقیت ایجاد شد');
            } catch (error) {
                sweetAlert(error.response.data.message, 'error');
                dispatch(setLoading(false));
            }
        }
    }

    return (
        <div className="flex gap-3">
            <input type="text" id="default-input" placeholder="Enter your todo here ..."
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   onChange={(e) => setTodo({
                       ...todo,
                       title: e.target.value
                   })}/>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={createTodoHandler}>Add
            </button>
        </div>
    );
}

export default React.memo(Create);