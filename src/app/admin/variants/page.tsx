import PageTitle from '@/components/adminComponent/PageTitle';
import VariantTable from '@/components/adminComponent/VariantTable';
import React from 'react';

const Variantspage = () => {
    return (
        <div>
            <PageTitle title='Variant Data Page'/>
            <VariantTable/>
        </div>
    );
};

export default Variantspage;