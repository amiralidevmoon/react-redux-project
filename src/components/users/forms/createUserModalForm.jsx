/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'

export default function CreateUserModalForm() {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const [user, setUser] = useState(
        {
            firstName: '',
            lastName: '',
            company: '',
            phoneNumber: '',
            email: '',
            country: 'IR',
            gender: 'male',
            isActive: false,
            isAdmin: false,
            createdAt: Date.now(),
        }
    );

    // handle create user submit form
    const createUserHandler = async (e) => {
        e.preventDefault();

        setOpen(false);

        if (user) {
            console.log(user)
            setUser({})
        }
    }

    return (
        <>
            <button onClick={() => setOpen(true)}
                    type="button"
                    className="mb-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Create
                User
            </button>
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
                                                               placeholder="Amir Ali" required onChange={(e) => setUser({
                                                            ...user,
                                                            firstName: e.target.value
                                                        })}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="last_name"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last
                                                            name</label>
                                                        <input type="text" id="last_name"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="Taheri" required onChange={(e) => setUser({
                                                            ...user,
                                                            lastName: e.target.value
                                                        })}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="company"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                                                        <input type="text" id="company"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="Roocket" required onChange={(e) => setUser({
                                                            ...user,
                                                            company: e.target.value
                                                        })}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                                            number</label>
                                                        <input type="tel" id="phone"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="+98" required
                                                               onChange={(e) => setUser({
                                                                   ...user,
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
                                                           placeholder="amiralidevmoon@gmail.com" required onChange={(e) => setUser({
                                                        ...user,
                                                        email: e.target.value
                                                    })}/>
                                                </div>
                                                <label htmlFor="default"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Country</label>
                                                <select id="default"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        onChange={(e) => setUser({
                                                            ...user,
                                                            country: e.target.value
                                                        })}
                                                >
                                                    <option defaultValue>Choose a country</option>
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
                                                                       ...user,
                                                                       gender: e.target.value
                                                                   })} checked/>
                                                            <label htmlFor="inline-radio"
                                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                                        </div>
                                                        <div className="flex items-center mr-4">
                                                            <input id="inline-2-radio" type="radio" value="female" name="inline-radio-group"
                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                   onChange={(e) => setUser({
                                                                       ...user,
                                                                       gender: e.target.value
                                                                   })}/>
                                                            <label htmlFor="inline-2-radio"
                                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-start mb-6">
                                                    <div className="flex items-center h-5">
                                                        <input id="remember" type="checkbox" value=""
                                                               className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                               required onChange={(e) => setUser({
                                                            ...user,
                                                            isAdmin: e.target.checked
                                                        })}/>
                                                    </div>
                                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is
                                                        this user an admin ?</label>
                                                </div>
                                                <div className="flex items-start mb-6">
                                                    <div className="flex items-center h-5">
                                                        <input id="remember" type="checkbox" value=""
                                                               className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                               required onChange={(e) => setUser({
                                                            ...user,
                                                            isActive: e.target.checked
                                                        })}/>
                                                    </div>
                                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is
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