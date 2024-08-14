import Header from '@/components/HomeComponents/Header';
import LatestCategory from '@/components/HomeComponents/LatestCategory';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Mainlayout = () => {
    return (
        <div>
            <Header/>
            <Separator className="my-4" />
            <LatestCategory/>
        </div>
    );
};

export default Mainlayout;