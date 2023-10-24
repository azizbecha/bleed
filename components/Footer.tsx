import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white rounded-t-xl">
            <div className="w-full max-w-screen-xl mx-auto p-8 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        href="/"
                        className="flex items-center mb-4 sm:mb-0"
                    >
                        <img
                            src="../BLEED LOGO.png"
                            className="h-10 mr-3"
                            alt="Bleed Logo"
                        />
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                            BLEED
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 gap-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                <FaFacebook size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                <FaYoutube size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-y-1 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center font-bold">
                    © {new Date().getFullYear()}{" - "}
                    <Link href="/" className="hover:underline">
                        BLEED
                    </Link>
                </span>
            </div>
        </footer>

    )
}