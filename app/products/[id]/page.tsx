"use client"

import AOSWrapper from "@/components/AOSWrapper";
import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const BreadCrumb = () => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a
                        href="#"
                        className="inline-flex items-center text-sm text-gray-500 font-medium"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg
                            className="w-3 h-3 text-gray-500 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <a
                            href="#"
                            className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:hover:text-white"
                        >
                            Projects
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            className="w-3 h-3 text-gray-500 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="ml-1 text-sm font-medium md:ml-2 text-gray-500">
                            BLEED SKIMASK
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}

const SizeSelect = () => {

    const [selectedSize, setSelectedSize] = useState('S');
    const sizes: string[] = ['S', 'M', 'L', 'XL'];

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
    };

    return (
        <div className="flex items-center space-x-4">
            {sizes.map((size) => (
                <button
                    key={size}
                    className={`${selectedSize === size
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        } rounded-full w-10 h-10 flex items-center justify-center font-bold`}
                    onClick={() => handleSizeSelect(size)}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};

const QuantitySelect = () => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const minQuantity = 1;
    const maxQuantity = 10;

    const handleQuantityChange = (quantity: number) => {
        if (quantity >= minQuantity && quantity <= maxQuantity) {
            setSelectedQuantity(quantity);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <button
                className="font-extrabold bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 flex items-center justify-center rounded-full"
                onClick={() => handleQuantityChange(selectedQuantity - 1)}
            >
                -
            </button>
            <span className="text-gray-700 font-mono">{selectedQuantity}</span>
            <button
                className="font-extrabold bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 flex items-center justify-center rounded-full"
                onClick={() => handleQuantityChange(selectedQuantity + 1)}
            >
                +
            </button>
        </div>
    );
};


export default function Product() {

    return (
        <AOSWrapper>
            <Navbar />
            <Container>
                <BreadCrumb />
                <hr className="border-t-2 my-3" />

                <div className="grid grid-cols-2 mt-5">
                    <div className="col-span-2 md:col-span-1 px-0 md:pr-2 mb-5">
                        <div className="sticky top-0">
                            <img src="../../cagoule.jpg" className="w-full rounded-none" />
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 px-1 md:pl-2 md:py-5">
                        <div className="sticky top-0 text-justify">
                            <h1 className="text-4xl font-bold">BLEED SKIMASK</h1>
                            <hr className="border-t-2 mt-2 mb-3" />

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas autem et aliquam. Illum voluptatum quaerat asperiores consectetur accusantium a obcaecati earum numquam odio. Dolore odio ullam non sed ducimus quam. <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore quos necessitatibus quibusdam beatae hic id quaerat explicabo neque magnam eaque eum perspiciatis obcaecati veritatis in laboriosam, reiciendis numquam ipsam.
                            </p>

                            <hr className="border-t-2 mt-2 mb-3" />

                            <p className="font-mono">Price:</p>
                            <h3 className="text-xl font-bold font-mono mb-3">15.00 TND</h3>

                            <p className="font-mono mb-1 mt-5">Size:</p>
                            <SizeSelect />

                            <p className="font-mono mb-1 mt-5">Quantity:</p>
                            <QuantitySelect />

                            <button className="bg-white text-primary border-primary transition hover:bg-primary hover:text-white border-2 py-2 px-4 w-full mt-5 font-semibold rounded-none flex items-center justify-center">
                                <FaShoppingCart className="mr-2" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-2 sm:mt-8">
                    <div className="text-center text-white bg-primary rounded-lg items-center h-auto py-5 border-b-2 md:border-x-2 md:border-b-0 border-r-0" data-aos="zoom-in">
                        <img src="../BLEED DELIVERY_.png" className='w-36 h-36 mx-auto relative overflow-hidden transform transition-transform hover:scale-125' alt="" />

                        <p className='text-xl font-mono font-extrabold mt-4 mb-2'>DELIVERY OVER ALL THE WORLD</p>
                    </div>

                    <div className="text-center text-white bg-primary rounded-lg items-center h-auto py-5 border-b-2 md:border-r-2 md:border-b-0 border-r-0" data-aos="zoom-in">
                        <img src="../Handshake Emoji BLEED 1.png" className='w-40 h-36  mx-auto relative overflow-hidden transform transition-transform hover:scale-125' alt="" />

                        <p className='text-xl font-mono font-extrabold mt-4 mb-2'>EVERY SALE IS FINAL</p>
                    </div>

                    <div className="text-center text-white bg-primary rounded-lg items-center h-auto py-5 border-b-2 md:border-r-2 md:border-b-0 border-r-0" data-aos="zoom-in">
                        <img src="../BLEEDMAN 2_.png" className='w-36 h-36 mx-auto relative overflow-hidden transform transition-transform hover:scale-125' alt="" />

                        <p className='text-xl font-mono font-extrabold mt-4 mb-2'>24/7 CUSTOMER SUPPORT</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </AOSWrapper>
    )
}