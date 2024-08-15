import ConfirmPage from '@/components/usersComponent/ConfirmPage';
import CheckoutPage from '@/components/usersComponent/CheckoutPage';
import React from 'react';

const OrderPage = () => {
    return (
        <div className='flex justify-around gap-8'>
            <CheckoutPage/>
            <ConfirmPage/>
        </div>
    );
};

export default OrderPage;