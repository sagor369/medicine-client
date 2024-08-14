import ProductCart from '@/components/pages/productComponent/ProductCart';
import React from 'react';

const Productpage = () => {
    const data = [
        {
          name: "sahed",
        },
        {
          name: "sahed",
        },
        {
          name: "sahed",
        },
        {
          name: "sahed",
        },
        {
          name: "sahed",
        },
      ];
    return (
        <div className="py-6">
        
        <div className="grid grid-cols-3 gap-6 py-4">
          {data.map((_, i) => (
            <ProductCart />
          ))}
        </div>
      </div>
    );
};

export default Productpage;