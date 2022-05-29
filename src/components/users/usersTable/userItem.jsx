import React from 'react';
import {PencilAltIcon, TrashIcon} from '@heroicons/react/solid'

function UserItem({user}) {
    console.log(user)
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
            <td className="px-6 py-4 text-center">
                {user.isActive ? 'Active' : 'Disabled'}
            </td>
            <td className="px-6 py-4 text-center">
                {new Date(user.createdAt).toLocaleDateString('fa-IR')}
            </td>
            <td className="px-6 py-4 text-right flex gap-4 text-center ml-6">
                <PencilAltIcon className="h-5 w-5 text-blue-400 hover:text-blue-500 transition duration-200"/>
                <TrashIcon className="h-5 w-5 text-rose-500 hover:text-rose-700 transition duration-200"/>
            </td>
        </tr>
    );
}

export default UserItem;