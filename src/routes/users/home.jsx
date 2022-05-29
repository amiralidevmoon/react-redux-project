import React from 'react';
import CreateUserModalForm from "../../components/users/forms/createUserModalForm";
import UsersList from "../../components/users/usersTable/usersList";

function Home() {
    return (
        <div className="relative overflow-x-auto sm:rounded-lg top-52 max-w-screen-2xl mx-auto grid place-items-center p-5">
            <CreateUserModalForm/>
            <UsersList/>
        </div>
    );
}

export default Home; 