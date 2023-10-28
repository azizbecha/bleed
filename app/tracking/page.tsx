import { NextPage } from "next";

import AOSWrapper from "@/components/AOSWrapper";
import Navbar from "@/components/Navbar";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";

const Tracking: NextPage = () => {
    return (
        <AOSWrapper>
            <Navbar />
                <Container>
                    <div className="flex justify-center text-center">
                        <div>
                            <Title title="Order tracking" />
                            <div className="border-2 border-primary rounded-md mt-5 p-4 w-full">
                                <img src="../../BLEED DELIVERY_.png" className="mx-auto w-32" alt="" />
                                <p className="text-black text-center text-lg">
                                    Your order is important to us, and we're here to make sure you have a seamless experience. <br />

                                    To track your order, simply enter your order number that you received in the email. If you need any assistance, our customer service team is available to help 24/7.
                                </p>

                                <form className="relative w-full mt-5">
                                    <input type="search" className="block p-3 w-full z-20 text-md bg-gray-200 rounded-lg focus:outline-none" placeholder="Please enter Order ID here" required />
                                    <button type="submit" className="absolute top-0 right-0 px-6 py-3 text-sm font-medium text-white bg-primary rounded-r-lg flex">Check</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            <Footer />
        </AOSWrapper>
    )
}

export default Tracking