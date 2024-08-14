import OrderTable from '@/components/adminComponent/OrderTable';
import PageTitle from '@/components/adminComponent/PageTitle';
import React from 'react';

const Orderspage = () => {
    return (
        <div>
            <PageTitle title='All Orders '/> 
            <OrderTable/>
        </div>
    );
};

export default Orderspage;