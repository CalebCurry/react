/* This example requires Tailwind CSS v2.0+ */
import { useContext, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../App';

const navigation = [
    { name: 'Employees', href: '/Employees' },
    { name: 'Customers', href: '/Customers' },
    { name: 'Dictionary', href: '/dictionary' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header(props) {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-14">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {/*className={classNames(
                                                    item.current
                                                        ? 'no-underline '
                                                        : 'no-underline',
                                                    ''
                                                )}*/}
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={({
                                                        isActive,
                                                    }) => {
                                                        return (
                                                            'px-3 py-2 rounded-md text-sm font-medium no-underline ' +
                                                            (!isActive
                                                                ? ' text-gray-300 hover:bg-gray-700 hover:text-white'
                                                                : 'bg-gray-900 text-white')
                                                        );
                                                    }}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                            {loggedIn ? (
                                                <NavLink
                                                    to={'/login'}
                                                    onClick={() => {
                                                        setLoggedIn(false);
                                                        localStorage.clear();
                                                    }}
                                                    className="px-3 py-2 rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                                >
                                                    Logout
                                                </NavLink>
                                            ) : (
                                                <NavLink
                                                    to={'/login'}
                                                    className="px-3 py-2 rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                                >
                                                    Login
                                                </NavLink>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <BellIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) => {
                                            return (
                                                'block px-3 py-2 rounded-md text-base font-medium no-underline ' +
                                                (!isActive
                                                    ? ' text-gray-300 hover:bg-gray-700 hover:text-white'
                                                    : 'bg-gray-900 text-white')
                                            );
                                        }}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                                {loggedIn ? (
                                    <NavLink
                                        to={'/login'}
                                        onClick={() => {
                                            setLoggedIn(false);
                                            localStorage.clear();
                                        }}
                                        className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Logout
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        to={'/login'}
                                        className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className="bg-gray-300">
                <div className="max-w-7xl mx-auto min-h-screen px-3 py-2">
                    {props.children}
                </div>
            </div>
        </>
    );
}
