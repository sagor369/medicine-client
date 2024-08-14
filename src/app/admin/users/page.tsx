import PageTitle from '@/components/adminComponent/PageTitle';
import UserTable from '@/components/adminComponent/UserTable';
import React from 'react';

const UserManagepage = () => {
    return (
        <div>
            <PageTitle title='User Page'/>
           <UserTable/>
        </div>
    );
};

export default UserManagepage;