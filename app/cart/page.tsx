import { NextPage } from "next";

import AOSWrapper from "@/components/AOSWrapper";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Title } from "@/components/Title";

import { FaMinus, FaPlus } from "react-icons/fa";

interface Item {
    title: string,
    price: number,
    color: string,
    quantity: number,
    image: string
}

const CartItem: React.FC<Item> = (props) => {
    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
                src={props.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between items-center">
                <div className="mt-5 p-3 sm:mt-0">
                    {/* <h2 className="text-2xl font-bold text-gray-900">Ski Mask</h2> */}
                    <h1 className="font-bold text-3xl">{props.title}</h1>

                    <h2 className="text-gray-400 text-center sm:text-start font-mono font-semibold mt-2">{props.color}</h2>

                    <h2 className="text-gray-400 text-center sm:text-start font-semibold mt-2">{props.price} TND</h2>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flexx items-center">
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-gray-300 text-xs p-3 rounded-l hover:bg-gray-400"
                            >
                                <FaMinus />
                            </button>
                            <div className="px-4 font-mono">{props.quantity}</div>
                            <button
                                className="bg-gray-300 text-xs p-3 rounded-r hover:bg-gray-400"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <p className="text-lg font-mono">{Number(props.price*props.quantity)} TND</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SubTotal: React.FC = () => {
    return (
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <h1 className="font-bold text-2xl text-start mb-2">Summary:</h1>
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700 font-semibold">Subtotal</p>
                <p className="text-gray-700 font-mono">65.00 TND</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700 font-semibold">Shipping</p>
                <p className="text-gray-700 font-mono">8 TND</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold font-mono">73.00 TND</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-none bg-primary py-2 font-medium text-blue-50 hover:bg-blue-600">
                Checkout
            </button>
        </div>
    )
}

const Cart: NextPage = () => {
    return (
        <AOSWrapper>
            <Navbar />
            <Container>
                <div className="text-center w-full">
                    <div>
                        <Title title="Cart" />
                        <hr className="my-6 border-t-2" />

                        <div className="mx-auto max-w-full justify-center px-2 sm:px-6 mt-5 md:flex md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-2/3">
                                <h1 className="font-bold text-2xl text-start mb-2">Items:</h1>
                                <CartItem title="BLEED TEE" color="White" price={50.00} image="../../ala.jpg" quantity={1} />
                                <CartItem title="SKI MASK" color="White" price={15.00} image="../../cagoule.jpg" quantity={1} />

                            </div>

                            <SubTotal />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </AOSWrapper>
    )
}

export default Cart