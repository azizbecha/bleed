"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'

import { signInWithEmailAndPassword } from 'firebase/auth';

import toast from 'react-hot-toast';

import AOSWrapper from '@/components/AOSWrapper';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';

import { auth } from '../../../auth/firebase';

function Login() {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = async () => {

        setLoading(true);
        toast.loading("Please wait", {
            duration: 1000
        });

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('dashboard');
            toast.success("Success");
            setLoading(false);
        } catch (error: any) {
            console.error(error.message);
            toast.error("An error has been occured");
            setLoading(false);
        }
    }

    return (
        <AOSWrapper>
            <Navbar />
            <Container>
                <div className="flex justify-center text-center w-full">
                    <div className='w-2/4 mx-auto'>
                        <h2 className='font-extrabold text-4xl'>Login</h2>

                        <form method='post' className='mt-5 w-full border-2 border-gray-200 rounded-md p-4' onSubmit={handleLogin}>
                            <div className="mb-2 w-full text-start">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" disabled={loading} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5" required />
                            </div>

                            <div className="mb-2 w-full text-start">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" disabled={loading} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5" required />
                            </div>

                            <button type='submit' disabled={loading} className='px-6 py-2 transition rounded-md text-white bg-primary disabled:bg-gray-300'>Login</button>
                        </form>
                    </div>
                </div>
            </Container>
            <Footer />
        </AOSWrapper>
    );
}

export default Login;
