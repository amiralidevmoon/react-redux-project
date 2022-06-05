import React, {useEffect, useState} from 'react';
import TableHeader from "./layouts/tableHeader";
import {getUsersFromService} from "../../services/usersService";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../store/slices/usersSlice";
import Loading from "../layouts/loading";
import {setLoading} from "../../store/slices/loadingSlice";
import {sweetAlert} from "../../helpers/helpers";
import {USER_PER_PAGE} from "../../utils/constants";
import Pagination from "./layouts/pagination";
import Users from "./users";


function List() {
    const dispatch = useDispatch();

    const usersList = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.loading.show);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        dispatch(setLoading(true));
        try {
            let users = await getUsersFromService();
            dispatch(setUsers(users));
            dispatch(setLoading(false));
            setTotalPages(Math.ceil(users.length / USER_PER_PAGE));
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    const handlePaginateBtnClick = num => {
        setPage(num);
    }

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHeader
                headerFields={['#', 'Name', 'Family', 'Email', 'Phone', 'Country', 'Gender', 'Type', 'Status', 'Creation Time', 'Settings']}/>
            <tbody>
            {
                loading
                    ? <tr>
                        <td colSpan="11" className="text-center p-20"><Loading/></td>
                    </tr>
                    : <>
                        {usersList && <Users users={usersList} page={page}/>}
                        <Pagination totalPages={totalPages} handlePaginateBtnClick={handlePaginateBtnClick}/>
                    </>
            }
            </tbody>
        </table>
    );
}

export default React.memo(List);