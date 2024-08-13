import CreateProductForm from '@/components/adminComponent/CreateProductForm';
import PageTitle from '@/components/adminComponent/PageTitle';
import React from 'react';

const CreateProductpage = () => {
    return (
        <div>
            <PageTitle title='Product Create page'/>
            <CreateProductForm/>
        </div>
    );
};

export default CreateProductpage;