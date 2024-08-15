import OrderSummery from '@/components/pages/addToCartcomponent/OrderSummery';
import CheckoutPage from '@/components/usersComponent/CheckoutPage';
import React from 'react';

const OrderPage = () => {
    return (
        <div className='flex justify-around gap-8'>
            <CheckoutPage/>
            <OrderSummery/>
        </div>
    );
};

export default OrderPage;