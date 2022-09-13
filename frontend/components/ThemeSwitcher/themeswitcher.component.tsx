import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();


    return (
        <div className="flex items-center text-gray-800">

            <button onClick={() => setTheme("light")}>
                <span className={`flex items-center cursor-pointer py-1 px-3 rounded-md rounded-r-none ${theme === "light" ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"}`}>
                    <FaSun size="20px" className="mr-1 text-yellow-600" />
                    Light
                </span>
            </button>

            <button onClick={() => setTheme("dark")}>
                <span className={`flex items-center cursor-pointer py-1 px-3 rounded-md rounded-l-none ${theme === "dark" ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"}`}>
                    <FaMoon size="20px" className="mr-1 text-gray-500" />
                    Dark
                </span>
            </button>
        </div>)
    // <div className="flex items-center bg-gray-100 p-2 rounded-md text-gray-600">
    //     <span className={`flex items-center cursor-pointer`}>
    //         <FaSun size="20px" className="mr-1 text-yellow-600" />
    //         Light
    //     </span>

    //     <span className="flex items-center cursor-pointer">
    //         <span className="mx-2 text-gray-300">|</span>
    //         <FaMoon size="20px" className="mr-1 text-gray-500" />
    //     </span>
    //     Dark
    // </div>

}

export default dynamic(() => Promise.resolve(ThemeSwitcher), {
    ssr: false
})