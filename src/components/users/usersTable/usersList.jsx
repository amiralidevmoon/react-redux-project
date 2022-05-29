import React, {useEffect} from 'react';
import HeaderTable from "./layouts/headerTable";
import UserItem from "./userItem";
import {getUsersFromService} from "../../../services/usersService";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../../store/slices/usersSlice";

function UsersList() {
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        let users = await getUsersFromService();
        dispatch(setUsers(users));
    }

    const usersList = useSelector((state) => state.users.list);

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <HeaderTable
                headerFields={['#', 'Name', 'Family', 'Email', 'Phone', 'Country', 'Gender', 'Type', 'Status', 'Creation Time', 'Settings']}/>
            <tbody>
            {
                usersList && usersList.map((user) => <UserItem user={user} key={user.id + Date.now()}/>)
            }
            </tbody>
        </table>
    );
}

export default UsersList;