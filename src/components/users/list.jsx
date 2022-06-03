import React, {useEffect} from 'react';
import TableHeader from "./tableHeader";
import Item from "./item";
import {getUsersFromService} from "../../services/usersService";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../store/slices/usersSlice";
import Loading from "../layouts/loading";
import {setLoading} from "../../store/slices/loadingSlice";
import {sweetAlert} from "../../helpers/helpers";

function List() {
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        dispatch(setLoading(true));
        try {
            let users = await getUsersFromService();
            dispatch(setUsers(users));
            dispatch(setLoading(false));
            sweetAlert('اطلاعات با موفقیت دریافت شد');
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    const usersList = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.loading.show);
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHeader
                headerFields={['#', 'Name', 'Family', 'Email', 'Phone', 'Country', 'Gender', 'Type', 'Status', 'Creation Time', 'Settings']}/>
            <tbody>
            {
                loading
                    ? <Loading/>
                    : usersList && usersList.map((user) => <Item user={user} key={user.id}/>)
            }
            </tbody>
        </table>
    );
}

export default React.memo(List);