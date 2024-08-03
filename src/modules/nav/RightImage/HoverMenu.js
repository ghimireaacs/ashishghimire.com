// Import React
import React from "react";

// Define the menu items
export const socialMenus = [
    { name: "BLOG", href: "/blogs" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "RESUME", href: "/resume" },
    { name: "YOUTUBE", href: "https://youtube.com/@ashishghimire" },
    { name: "NOTES", href: "/notes" },
];

// Create a DropdownMenu component
const DropdownMenu = () => {
    return (
        <div className="relative inline-block">
            {/* Trigger Element */}
            <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
                Menu
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg mt-10">
                <ul className="py-1">
                    {/* Map through socialMenus to create menu items */}
                    {socialMenus.map((menu, index) => (
                        <li key={index}>
                            <a
                                href={menu.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;
