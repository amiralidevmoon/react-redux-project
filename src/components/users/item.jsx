import React from 'react';
import Edit from "./actions/edit";
import UserDelete from "./actions/delete";
import {Link} from "react-router-dom";
import {EyeIcon} from "@heroicons/react/solid";

function Item({user}) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition duration-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center">
                {user.id}
            </th>
            <td className="px-6 py-4 text-center">
                {user.firstName}
            </td>
            <td className="px-6 py-4 text-center">
                {user.lastName}
            </td>
            <td className="px-6 py-4 text-center">
                {user.email}
            </td>
            <td className="px-6 py-4 text-center">
                {user.phoneNumber}
            </td>
            <td className="px-6 py-4 text-center">
                {user.country}
            </td>
            <td className="px-6 py-4 text-center">
                {user.gender}
            </td>
            <td className="px-6 py-4 text-center">
                {user.isAdmin ? 'Admin' : 'User'}
            </td>
            <td className={`px-6 py-4 text-center ${user.isActive ? 'text-green-500' : 'text-red-500'}`}>
                {user.isActive ? 'Active' : 'Disabled'}
            </td>
            <td className="px-6 py-4 text-center">
                {new Date(user.createdAt).toLocaleDateString('fa-IR')}
            </td>
            <td className="px-6 py-4 text-right flex gap-4 text-center ml-6">
                <Edit user={user}/>
                <UserDelete userId={user.id}/>
                <Link to={`/users/${user.id}`} className="h-5 w-5 hover:text-cyan-400 text-cyan-700 transition duration-200">
                    <EyeIcon/>
                </Link>
            </td>
        </tr>
    );
}

export default React.memo(Item);