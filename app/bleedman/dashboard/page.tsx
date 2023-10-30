"use client"

import { NextPage } from "next";
import ProtectedRoute from "@/auth/ProtectedRoute";
import AOSWrapper from "@/components/AOSWrapper";

const Dashboard: NextPage = () => {
    
    return (
        <ProtectedRoute>
            <AOSWrapper>
                <h1>welcome to dashboard</h1>
            </AOSWrapper>
        </ProtectedRoute>
    )
}

export default Dashboard