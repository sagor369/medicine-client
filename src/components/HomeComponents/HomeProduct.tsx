import React from "react";
import PageTitle from "../adminComponent/PageTitle";
import ProductCart from "../pages/productComponent/ProductCart";

const HomeProduct = () => {
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
      <div className="flex justify-start">
        <PageTitle title="Product" />
      </div>
      <div className="grid grid-cols-3 gap-6 py-4">
        {data.map((_, i) => (
          <ProductCart />
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
