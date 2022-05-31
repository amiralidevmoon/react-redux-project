import React, {useEffect} from 'react';
import HeaderTable from "./layouts/headerTable";
import UserItem from "./userItem";
import {getUsersFromService} from "../../../services/usersService";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../../store/slices/usersSlice";
import Loading from "../../layouts/loading";
import {setLoading} from "../../../store/slices/loadingSlice";

function UsersList() {
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        dispatch(setLoading(true))
        try {
            let users = await getUsersFromService();
            dispatch(setUsers(users));
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error.response)
        }
    }

    const usersList = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.loading.show);
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <HeaderTable
                headerFields={['#', 'Name', 'Family', 'Email', 'Phone', 'Country', 'Gender', 'Type', 'Status', 'Creation Time', 'Settings']}/>
            <tbody>
            {
                loading
                    ? <Loading/>
                    : usersList && usersList.map((user) => <UserItem user={user} key={user.id}/>)
            }
            </tbody>
        </table>
    );
}

export default UsersList;