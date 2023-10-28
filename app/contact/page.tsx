"use client"

import AOSWrapper from "@/components/AOSWrapper";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Title } from "@/components/Title";
import { NextPage } from "next";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

const Contact: NextPage = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <AOSWrapper>
            <Navbar />
            <Container>
                <div className="flex justify-center text-center w-full">
                    <div>
                        <Title title="Contact" />

                    </div>
                </div>
                <form className="mt-5 border-2 border-primary rounded-md px-6 py-5">
                    <img src="../../../mad 2.png" className="w-44 mx-auto" />
                    <h2 className="font-bold font-mono text-2xl text-center mb-5">Get in touch with the Mandem 💙</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-2 col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5" placeholder="Please enter your firstname here" required />
                        </div>

                        <div className="mb-2 col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5" placeholder="Please enter your lastname here" required />
                        </div>

                        <div className="mb-2 col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5" placeholder="Please enter your email here" required />
                        </div>

                        <div className="mb-2 col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                            <PhoneInput
                                className="m-0 w-full py-1"
                                inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5"
                                placeholder="Please enter your phone number here"
                                defaultCountry="tn"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />
                        </div>

                        <div className="mb-2 col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5"
                                placeholder="Please enter your message here"
                                rows={10}
                                required
                            ></textarea>
                        </div>

                        <div className="col-span-2">
                            <button className='flex text-center text-white mx-auto border-2 border-primary bg-primary px-4 py-2 items-center font-mono hover:underline'>
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </Container>
            <Footer />
        </AOSWrapper>
    )
}

export default Contact