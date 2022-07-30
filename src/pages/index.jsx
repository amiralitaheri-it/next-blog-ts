import Link from "next/link";
import React from "react";

import {ClipboardListIcon, EmojiHappyIcon, UserGroupIcon} from "@heroicons/react/solid";

function Home() {
    return (
        <div
            className="flex flex-col py-24 gap-20 overflow-x-auto sm:rounded-lg top-52 text-gray-500 dark:text-gray-400 max-w-screen-2xl mx-auto grid place-items-center p-5">
            <div className="flex items-center align-baseline gap-6">
                <h1 className="text-6xl">Welcome to my website</h1>
                <EmojiHappyIcon className="w-20 h-20 text-yellow-300"/>
            </div>
            <div className="flex gap-10">
                <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link href="/admin-panel/users">
                        <a className="flex gap-4">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Users List Manager</h5>
                            <UserGroupIcon
                                className="w-8 h-8"/>
                        </a>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Simple users list managers using reactjs & endapi</p>
                    <Link href="/admin-panel/users">
                        <a
                            className="inline-flex mt-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Go to users
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </Link>
                </div>

                <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link href="/admin-panel/articles">
                        <a className="flex gap-4">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Article List Manager</h5>
                            <ClipboardListIcon
                                className="w-8 h-8"/>
                        </a>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Simple Article list managers using reactjs & endapi</p>
                    <Link href="/admin-panel/articles">
                        <a
                            className="inline-flex mt-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Go to articles
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Home);