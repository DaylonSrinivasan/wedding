import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface NavBarProps {
    links: { ref: React.RefObject<HTMLDivElement | null>; title: string }[];
    onClick: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

function NavBar({ links, onClick }: NavBarProps) {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-orange-300 fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden ml-auto">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <IoIosCloseCircleOutline />
                                ) : (
                                    <RxHamburgerMenu />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex">
                                {links.map(({ ref, title }) => (
                                    <li
                                        key={title}
                                        className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-amber-900 border-amber-900 md:hover:text-amber-600 md:hover:bg-transparent"
                                    >
                                        <button
                                            className="w-full text-left"
                                            onClick={() => {
                                                onClick(ref);
                                                setNavbar(false); // Close the navbar on click
                                            }}
                                        >
                                            {title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
