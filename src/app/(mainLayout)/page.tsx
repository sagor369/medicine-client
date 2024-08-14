import PageTitle from '@/components/adminComponent/PageTitle';
import Header from '@/components/HomeComponents/Header';
import HomeProduct from '@/components/HomeComponents/HomeProduct';
import LatestCategory from '@/components/HomeComponents/LatestCategory';
import ProductCart from '@/components/pages/productComponent/ProductCart';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Mainlayout = () => {
    const data = [
        {
            name: "sahed"
        },
        {
            name: "sahed"
        },
        {
            name: "sahed"
        },
        {
            name: "sahed"
        },
        {
            name: "sahed"
        },
    ]
    return (
        <div>
            <Header/>
            <Separator className="my-4" />
            <LatestCategory/>
            <Separator className="my-4" />
            <HomeProduct/>
        </div>
    );
};

export default Mainlayout;