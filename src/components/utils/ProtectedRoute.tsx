import { useCurrentToken } from '@/redux/features/auth/AuthSlice';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProtectedRoute = ({children}:{children: React.ReactNode}) => {
    const route = useRouter()
    const token = useAppSelector(useCurrentToken)
    if(!token){
        route.push("/login")
    }

    return {children}
};

export default ProtectedRoute;