"use client";
import { useGetAddressQuery } from "@/redux/features/Users/AddressSlice";
import React from "react";

const CheckoutPage = () => {
  const { data, isLoading } = useGetAddressQuery(undefined);
  const address = data?.data?.result[0];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-xl font-bold py-2">Name: {address?.name}</h1>
      <p className="text-lg py-2">
        PhoneNo:<span className=" text-slate-400"> {address?.phone}</span>{" "}
      </p>
      <p className="text-lg py-2">
        Division:<span className=" text-slate-400"> {address?.division}</span>{" "}
      </p>
      <p className="text-lg py-2">
        Distric: <span className=" text-slate-400"> {address?.district}</span>{" "}
      </p>
      <p className="text-lg py-2">
        Sub Distric:{" "}
        <span className=" text-slate-400"> {address?.subDistrict}</span>
      </p>
      <p className="text-lg py-2">
        Home: <span className=" text-slate-400"> {address?.address}</span>{" "}
      </p>
    </div>
  );
};

export default CheckoutPage;
