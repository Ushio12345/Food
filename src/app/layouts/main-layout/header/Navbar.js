import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

export default function Navbar() {
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const [isMenuLinkOpen, setMenuLinkOpen] = useState(true);

    const toggleDropDown = () => {
        setDropDownOpen((prev) => {
            if (!prev) setMenuLinkOpen(false);
            return !prev;
        });
    };

    const toggleHiddenMenu = () => {
        setMenuLinkOpen((prev) => {
            if (!prev) setDropDownOpen(false);
            return !prev;
        });
    };

    return (
        <div className="navbar-item">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="layout-not-padding flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link to="/" className="namecom flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} alt="Bistro Bliss Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bistro Bliss</span>
                    </Link>
                    <div className="navbar-right flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isDropDownOpen}
                            onClick={toggleDropDown}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="User profile" />
                        </button>
                        {isDropDownOpen && (
                            <div
                                className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
                                                    isActive ? "active" : ""
                                                } `
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about-us"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
                                                    isActive ? "active" : ""
                                                } `
                                            }
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/profile"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
                                                    isActive ? "active" : ""
                                                } `
                                            }
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/logout"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
                                                    isActive ? "active" : ""
                                                } `
                                            }
                                        >
                                            Sign out
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded={isMenuLinkOpen}
                            onClick={toggleHiddenMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`sub-menu items-center justify-between ${isMenuLinkOpen ? "flex" : "hidden"} w-full md:w-auto md:order-1`}
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({ isActive }) => `block py-2 px-3 ${isActive ? "active" : ""}`} aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us" className={({ isActive }) => `block py-2 px-3 ${isActive ? "active" : ""}`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" className={({ isActive }) => `block py-2 px-3 ${isActive ? "active" : ""}`}>
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages" className={({ isActive }) => `block py-2 px-3 ${isActive ? "active" : ""}`}>
                                    Pages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 ${isActive ? "active" : ""}`}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
