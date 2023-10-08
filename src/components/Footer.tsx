import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-whiteshadow dark:bg-slate-900">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
                        © 2023{" "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Flowbite™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-300 sm:mt-0">
                        <li>
                            <a
                                href="#"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
