/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {useDispatch} from "react-redux";
import {addUser} from "../../../store/slices/usersSlice"
import {addUserFromService} from "../../../services/usersService";
import {PencilAltIcon} from "@heroicons/react/solid";
import {setLoading} from "../../../store/slices/loadingSlice";

export default function UserEdit({user}) {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const dispatch = useDispatch()

    const [editUser, setUser] = useState(
        {
            firstName: '',
            lastName: '',
            company: '',
            phoneNumber: '',
            email: '',
            password: (Math.random() * 1000).toString(),
            country: 'IR',
            gender: 'male',
            isActive: false,
            isAdmin: false,
            createdAt: Date.now(),
        }
    );

    // handle create user submit form
    const createUserHandler = async (e) => {
        dispatch(setLoading(true))

        e.preventDefault();

        setOpen(false);

        if (user) {
            try {
                let newUser = await addUserFromService(user);
                dispatch(addUser(newUser));
                setUser({});
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
    }

    return (
        <>
            <PencilAltIcon className="h-5 w-5 text-blue-400 hover:text-blue-500 transition duration-200" onClick={() => setOpen(true)}/>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 transition-opacity"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left dark:bg-gray-700 dark:text-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    <div className="text-center">
                                        <Dialog.Title as="h3" className="text-lg dark:text-white leading-6 font-medium text-gray-900">
                                            Create User
                                        </Dialog.Title>
                                        <div className="mt-5">
                                            <form onSubmit={(e) => createUserHandler(e)}>
                                                <div className="grid gap-6 mb-6 lg:grid-cols-2 z-150">
                                                    <div>
                                                        <label htmlFor="first_name"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First
                                                            name</label>
                                                        <input type="text" id="first_name"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="Amir Ali" required value={user.firstName} onChange={(e) => setUser({
                                                            ...editUser,
                                                            firstName: e.target.value
                                                        })}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="last_name"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last
                                                            name</label>
                                                        <input type="text" id="last_name"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="Taheri" required value={user.lastName} onChange={(e) => setUser({
                                                            ...editUser,
                                                            lastName: e.target.value
                                                        })}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="company"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                                                        <input type="text" id="company"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="Roocket" required value={user.company} onChange={(e) => setUser({
                                                            ...editUser,
                                                            company: e.target.value
                                                        })}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                                            number</label>
                                                        <input type="tel" id="phone"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="+98" required value={user.phoneNumber}
                                                               onChange={(e) => setUser({
                                                                   ...editUser,
                                                                   phoneNumber: e.target.value
                                                               })}/>
                                                    </div>
                                                </div>
                                                <div className="mb-6">
                                                    <label htmlFor="email"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Email
                                                        address</label>
                                                    <input type="email" id="email"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="amiralidevmoon@gmail.com" value={user.email} required
                                                           onChange={(e) => setUser({
                                                               ...editUser,
                                                               email: e.target.value
                                                           })}/>
                                                </div>
                                                <label htmlFor="default"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Country</label>
                                                <select id="default"
                                                        defaultValue={user.country}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        onChange={(e) => setUser({
                                                            ...editUser,
                                                            country: e.target.value
                                                        })}
                                                >
                                                    <option>Choose a country</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                                <div className="flex-col">
                                                    <label htmlFor="default"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Gender</label>

                                                    <div className="flex mb-7">
                                                        <div className="flex items-center mr-4">
                                                            <input id="inline-radio" type="radio" value="male" name="inline-radio-group"
                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                   onChange={(e) => setUser({
                                                                       ...editUser,
                                                                       gender: e.target.value
                                                                   })} checked={user.gender === 'male'}/>
                                                            <label htmlFor="inline-radio"
                                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                                        </div>
                                                        <div className="flex items-center mr-4">
                                                            <input id="inline-2-radio" type="radio" value="female" name="inline-radio-group"
                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                   onChange={(e) => setUser({
                                                                       ...editUser,
                                                                       gender: e.target.value
                                                                   })} checked={user.gender === 'female'}/>
                                                            <label htmlFor="inline-2-radio"
                                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-start mb-6">
                                                    <div className="flex items-center h-5">
                                                        <input id="isAdmin" type="checkbox" value=""
                                                               className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                               onChange={(e) => setUser({
                                                                   ...editUser,
                                                                   isAdmin: e.target.checked
                                                               })} defaultChecked={user.isAdmin}/>
                                                    </div>
                                                    <label htmlFor="isAdmin" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is
                                                        this user an admin ?</label>
                                                </div>
                                                <div className="flex items-start mb-6">
                                                    <div className="flex items-center h-5">
                                                        <input id="isActive" type="checkbox" value=""
                                                               className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                               onChange={(e) => setUser({
                                                                   ...editUser,
                                                                   isActive: e.target.checked
                                                               })} defaultChecked={user.isActive}/>
                                                    </div>
                                                    <label htmlFor="isActive" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is
                                                        this user active ?</label>
                                                </div>
                                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                                    <button
                                                        type="submit"
                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                                    >
                                                        Create
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                                        onClick={() => setOpen(false)}
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}