import { selectCurrentUser } from '@/redux/features/auth/AuthSlice';
import { useAppSelector } from '@/redux/hooks';
import { USER_ROLE } from '@/types/TCreateUser';
import React from 'react';

const AdminProtected = ({children}:{children: React.ReactNode}) => {
    const user = useAppSelector(selectCurrentUser)
    if(user?.role === USER_ROLE.admin || user?.role === USER_ROLE.superAdmin){
        return children
    }
};

export default AdminProtected;