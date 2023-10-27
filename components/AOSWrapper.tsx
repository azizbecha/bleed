"use client"

import { useEffect } from 'react';

import NextNProgress from 'nextjs-progressbar';

import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <NextNProgress color="#f00004" height={50} />
            {children}
        </>
    )
}