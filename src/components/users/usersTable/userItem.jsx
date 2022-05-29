import React from 'react';

function UserItem({user}) {
    console.log(user)
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer transition duration-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {user.id}
            </th>
            <td className="px-6 py-4">
                {user.firstName}
            </td>
            <td className="px-6 py-4">
                {user.lastName}
            </td>
            <td className="px-6 py-4">
                {user.email}
            </td>
            <td className="px-6 py-4">
                {user.phoneNumber}
            </td>
            <td className="px-6 py-4">
                {user.country}
            </td>
            <td className="px-6 py-4">
                {user.gender}
            </td>
            <td className="px-6 py-4">
                {user.isAdmin ? 'Admin' : 'User'}
            </td>
            <td className="px-6 py-4">
                {user.isActive ? 'Active' : 'Disabled'}
            </td>
            <td className="px-6 py-4">
                {/*{user.createdAt.toLocaleDateString('fa-IR')}*/}
                {user.createdAt}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="src/routes/users/usersList#home.jsx"
                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
}

export default UserItem;