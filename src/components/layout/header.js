// src/components/Header.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { menus } from "./helper";
import { usePathname } from "next/navigation";
import navMobileIcon from "@public/images/illustrations/navMobileIcon.svg";
import { clsx } from "clsx";
import logo from "@public/images/logos/blackLogo.svg";
import githubIcon from "@public/images/icons/github.svg";
import linkedinIcon from "@public/images/icons/linkedin.svg";

const Header = () => {
    const pathname = usePathname();

    return (
        <section className="flex flex-col mx-auto lg:mx-8 py-2">
            <header>
                <div className="mx-auto">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12 font-heading lg:mx-16 text-[#163E7A] text-4xl">
                            <Link href="/">Prashant Ghimire</Link>
                        </div>
                        {/* NAVBAR */}
                        <div className="flex md:flex lg:justify-center md:items-center md:gap-24">
                            <nav
                                aria-label="Global"
                                className="hidden md:block"
                            >
                                <ul className="flex items-center gap-6 text-lg justify-center font-menu">
                                    {menus.map(({ name, href }) => (
                                        <li key={name}>
                                            <Link
                                                href={href}
                                                className={clsx({
                                                    "text-gray-500 transition hover:text-gray-500/75": true,
                                                    "border-b-2 border-gray-500/75":
                                                        pathname === href,
                                                })}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                    <figure className="flex gap-4">
                                        <Image
                                            src={githubIcon}
                                            alt="Github"
                                            height={24}
                                            className=" hover:invert"
                                        />
                                        <Image
                                            src={linkedinIcon}
                                            alt="Github"
                                            height={24}
                                            className="hover:invert"
                                        />
                                    </figure>
                                </ul>
                            </nav>

                            {/* Mobile ICON */}
                            <div className="flex items-center gap-4 justify-end">
                                <div className="block md:hidden">
                                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                        <Image
                                            src={navMobileIcon}
                                            alt={"Mobile Nav Icon"}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex md:flex md:items-right md:gap-12 size-12 lg:justify-end">
                            <Link href="/">
                                <Image src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;
