import CreateCategory from '@/components/adminComponent/CreateCategory';
import PageTitle from '@/components/adminComponent/PageTitle';
import React from 'react';

const CreateCatagorypage = () => {
    return (
        <div>
            <PageTitle title='Create Category Page'/>
            <CreateCategory/>
        </div>
    );
};

export default CreateCatagorypage;