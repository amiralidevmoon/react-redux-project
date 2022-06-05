import React from 'react'

const Pagination = ({totalPages, handlePaginateBtnClick}) => {
    const pages = [...Array(totalPages).keys()].map(number => number + 1);
    return (
        <tr className="w-full grid place-items-center">
            <td>
                <ul className="inline-flex items-center -space-x-px mt-10 text-center">
                    {pages.map(number => (
                        <li key={number}
                            onClick={() => handlePaginateBtnClick(number)}>
                            <span
                                className="cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</span>
                        </li>
                    ))}
                </ul>
            </td>
        </tr>
    )
}

export default Pagination