import React, {useEffect} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../../store/slices/loadingSlice";
import {getTodosFromService} from "../../services/todoService";
import {setTodo} from "../../store/slices/todoSlice";
import {sweetAlert} from "../../helpers/helpers";
import Loading from "../../components/layouts/loading";
import Create from "../../components/todos/create";

function Index() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        dispatch(setLoading(true));
        try {
            let todos = await getTodosFromService();
            dispatch(setTodo(todos));
            dispatch(setLoading(false));
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    const todos = useSelector(state => state.todos.list);
    const loading = useSelector((state) => state.loading.show);

    let activeClassName = "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500";
    let notActiveClassName = "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    console.log(todos)
    return (
        <div
            className="relative flex flex-col gap-20 overflow-x-auto sm:rounded-lg top-52 text-gray-500 dark:text-gray-400 max-w-screen-2xl mx-auto grid place-items-center p-5">
            <div
                className="max-w-2xl w-full bg-white px-4 pt-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-6">
                    <label htmlFor="default-input" className="ml-1 block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enter
                        Todo :</label>
                    <Create/>
                </div>
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="mr-2">
                            <NavLink to="/todos"
                                     className={({isActive}) =>
                                         isActive ? activeClassName : notActiveClassName
                                     }>All</NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to="/todos/done"
                                     className={({isActive}) =>
                                         isActive ? activeClassName : notActiveClassName
                                     }>Done</NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to="/todos/undone"
                                     className={({isActive}) =>
                                         isActive ? activeClassName : notActiveClassName
                                     }>Undone</NavLink>
                        </li>
                    </ul>
                    <div className="mt-1">
                        {
                            loading
                                ? <Loading/>
                                : <Outlet context={todos}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Index);