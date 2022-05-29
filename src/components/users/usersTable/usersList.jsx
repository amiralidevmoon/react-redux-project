import React from 'react';
import HeaderTable from "./layouts/headerTable";
import UserItem from "./userItem";
import {useSelector} from "react-redux";

function UsersList() {
    const users = useSelector((state) => state.users)

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <HeaderTable
                headerFields={['#', 'Name', 'Family', 'Email', 'Phone', 'Country', 'Gender', 'Type', 'Status', 'Creation Time', 'Settings']}/>
            <tbody>
            {
                users && users.map((user) => <UserItem user={user} key={user.id + Date.now()}/>)
            }
            </tbody>
        </table>
    );
}

export default UsersList;