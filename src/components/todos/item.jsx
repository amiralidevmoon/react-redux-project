import React from 'react';
import {BadgeCheckIcon, BanIcon, TrashIcon} from "@heroicons/react/solid";
import {useDispatch} from "react-redux";
import {setLoading} from "../../store/slices/loadingSlice";
import {sweetAlert} from "../../helpers/helpers";
import {deleteTodo, toggleStatusTodo} from "../../store/slices/todoSlice";
import {deleteTodoFromService, editTodoFromService} from "../../services/todoService";

function Item({todo}) {
    const dispatch = useDispatch();

    const todoDeleteHandler = async () => {
        dispatch(setLoading(true));

        try {
            await deleteTodoFromService(todo.id);

            deleteTodo(todo.id);
            dispatch(setLoading(false));
            sweetAlert('آیتم موردنظر با موفقیت حذف شد');
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    const todoToggleStatusHandler = async () => {
        dispatch(setLoading(true));

        try {
            await editTodoFromService(todo);
            dispatch(toggleStatusTodo(todo));
            dispatch(setLoading(false));
            sweetAlert('آیتم موردنظر با موفقیت ویرایش شد');
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    return (
        <div
            className="flex justify-between dark:bg-gray-800 dark:border-gray-700 border-b border-blue-300 px-5 py-4 cursor-pointer hover:bg-gray-100 text-gray-500 dark:text-gray-400">
            <span>{todo.id}</span>
            <span className={`${todo.status ? 'line-through text-green-500' : 'text-gray-400'}`}>{todo.title}</span>

            <div className="flex gap-4">
                <div>
                    {
                        todo.status
                            ?
                            <BanIcon className="h-5 w-5 text-rose-500 hover:text-rose-600 transition duration-200" onClick={todoToggleStatusHandler}/>
                            : <BadgeCheckIcon className="h-5 w-5 text-green-400 hover:text-green-500 transition duration-200"
                                              onClick={todoToggleStatusHandler}/>
                    }
                </div>
                <TrashIcon className="h-5 w-5 text-rose-300 hover:text-rose-700 transition duration-200" onClick={todoDeleteHandler}/>
            </div>
        </div>
    );
}

export default React.memo(Item);