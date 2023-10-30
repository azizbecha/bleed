import { NextPage } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const NotFound: NextPage = () => {
    return (
        <>
            <Navbar />
                <Container>
                    <div className="flex justify-center text-center w-full">
                        <div className='mx-auto'>
                            <img src="../mad 2.png" className="w-72" />

                            <h1 className="font-mono text-center text-black font-bold text-4xl">Page Not Found</h1>

                            <Link href={"/"}>
                                <button className="px-5 py-2 mt-4 bg-primary text-white">
                                    Go home
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            <Footer />
        </>
    )
}

export default NotFound