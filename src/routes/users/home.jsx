import React from 'react';
import {useSelector} from 'react-redux';
import CreateUserModalForm from "../../components/users/forms/createUserModalForm";

function Home() {
    const users = useSelector((state) => state.users)

    return (
        <div className="relative overflow-x-auto sm:rounded-lg top-52 max-w-screen-xl mx-auto grid place-items-center p-5">
            <CreateUserModalForm/>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer transition duration-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Sliver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="src/routes/users/usersList#home.jsx"
                           className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;