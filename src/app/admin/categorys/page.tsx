import CategoryTable from '@/components/adminComponent/CategoryTable';
import PageTitle from '@/components/adminComponent/PageTitle';
import React from 'react';

const Categoryspage = () => {
    return (
        <div>
            <PageTitle title='Category Data'/>
            <CategoryTable/>
        </div>
    );
};

export default Categoryspage;