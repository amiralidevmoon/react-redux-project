import React from 'react';
import {setLoading} from "../../../store/slices/loadingSlice";
import {filterUserFromService} from "../../../services/usersService";
import {filterUser} from "../../../store/slices/usersSlice";
import {sweetAlert} from "../../../helpers/helpers";
import {useDispatch} from "react-redux";

function Filter() {
    const dispatch = useDispatch();

    const filterUserHandler = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true));

        try {
            let users = await filterUserFromService(e.target.value);
            dispatch(filterUser(users));
            dispatch(setLoading(false));
            sweetAlert('اطلاعات با موفقیت فیلتر شد');
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    return (
        <div className="w-full">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter Users</label>
            <select id="countries"
                    onChange={(e) => filterUserHandler(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-1/6 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue value="10">all</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="9">9</option>
            </select>
        </div>
    );
}

export default React.memo(Filter);