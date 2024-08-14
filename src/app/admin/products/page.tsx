import PageTitle from '@/components/adminComponent/PageTitle';
import ProductTable from '@/components/adminComponent/ProductTable';
import React from 'react';

const products = () => {
    return (
        <div>
            <PageTitle title='Manage Product Page'/>
            <ProductTable/>
        </div>
    );
};

export default products;