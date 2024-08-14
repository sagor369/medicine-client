"use client"
import React from "react";
import RHInput from "../form/RHInput";
import { Separator } from "../ui/separator";
import RHForm from "../form/RHForm";
import { FieldValues } from "react-hook-form";
import { Button } from "../ui/button";
import PHSelect from "../form/PHSelect";
import { useGetProductQuery } from "@/redux/features/admin/ProductSlice";

const Variants = () => {
    const  {data,isLoading} = useGetProductQuery(undefined)
  const VariantSubmit = (event: FieldValues) => {
    console.log(event)
  };
  if(isLoading){
    return <div>loading.....</div>
  }
  return (
    <RHForm onSubmit={VariantSubmit}>
      <div className="flex justify-center">
        <p className="mt-4 ">Variants info</p>
      </div>
      <Separator className="mb-4 " />
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <RHInput name="name" placeholder="variant name" label="Name" />

        <RHInput name="price" placeholder="price" label="Price" />
        <PHSelect
          label="Products"
          name="productId"
          placeholder="Select Category"
          options={[{ label: "sahed", value: "sahed" }]}
        />
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 w-96" type="submit">
          Submit
        </Button>
      </div>
    </RHForm>
  );
};

export default Variants;
