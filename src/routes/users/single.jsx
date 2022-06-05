import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {setLoading} from "../../store/slices/loadingSlice";
import {getSingleUsersFromService} from "../../services/usersService";
import {sweetAlert} from "../../helpers/helpers";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../components/layouts/loading";
import {UserCircleIcon} from "@heroicons/react/solid";
import Edit from "../../components/users/actions/edit";
import UserDelete from "../../components/users/actions/delete";

function Single() {
    const params = useParams();
    const dispatch = useDispatch();
    const [singleUser, setSingleUser] = useState(null);
    const loading = useSelector((state) => state.loading.show);

    useEffect(() => {
        getSingleUser();
    }, [])

    const getSingleUser = async () => {
        dispatch(setLoading(true));
        try {
            let user = await getSingleUsersFromService(params.id);
            setSingleUser(user);
            dispatch(setLoading(false));
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
            dispatch(setLoading(false));
        }
    }

    return (
        <div
            className="relative flex flex-col gap-20 overflow-x-auto sm:rounded-lg top-52 text-gray-500 dark:text-gray-400 max-w-screen-2xl mx-auto grid place-items-center p-5">
            {
                loading
                    ? <Loading/>
                    : singleUser && <div
                    className="max-w-lg w-full bg-white px-4 pt-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10">
                        <UserCircleIcon className="w-20 h-20"/>
                        <h5 className="mb-1 my-2 text-xl font-medium text-gray-900 dark:text-white">{`${singleUser.firstName} ${singleUser.lastName}`}</h5>
                        <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleUser.company} Company</span>
                        <span className="text-md mt-2 text-gray-500 dark:text-gray-400">+98 {singleUser.phoneNumber}</span>
                        <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleUser.email}</span>
                        <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleUser.country}</span>
                        <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleUser.isActive ? 'Active' : 'Disabled'}</span>
                        <span className="text-md mt-2 text-gray-500 dark:text-gray-400">{singleUser.isAdmin ? 'Admin' : 'User'}</span>
                        <span
                            className="text-md mt-2 text-gray-500 dark:text-gray-400">{new Date(singleUser.createdAt).toLocaleDateString('fa-IR')}</span>
                        <div className="flex mt-4 space-x-3 lg:mt-6">
                            <Edit user={singleUser}/>
                            <UserDelete userId={singleUser.id}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default React.memo(Single);