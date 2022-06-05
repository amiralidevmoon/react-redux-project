import React from 'react';
import Item from "./item";
import {USER_PER_PAGE} from "../../utils/constants";

const Users = ({users, page}) => {
    const startIndex = (page - 1) * USER_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

    return (
        selectedUsers && selectedUsers.map((user) => <Item user={user} key={user.id}/>)
    )
}

export default React.memo(Users)