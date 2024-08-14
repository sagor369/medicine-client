"use client";
import React, { useState } from "react";
import RHForm from "../form/RHForm";
import RHInput from "../form/RHInput";
import { FieldValues } from "react-hook-form";
import PHSelect from "../form/PHSelect";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "@/redux/features/admin/ProductSlice";
import { useGetCategoryQuery } from "@/redux/features/admin/CategorySlice";
import { TResponse,  } from "@/types/globalResponse";
import { TCategory } from "@/types/TCategory";
import { selectData } from "./Adminutils";
import { Loader2 } from "lucide-react";

const CreateProductForm = () => {
  const [createProduct, {data:ProductData, isLoading}] = useCreateProductMutation();
  const {data, isFetching} = useGetCategoryQuery(undefined)
  const fastData = selectData(data?.data?.result, "primary") 
  const secondData = selectData(data?.data?.result, "secondary") 
  const thardData = selectData(data?.data?.result, "tertiary") 
  const productSubmint = async (event: FieldValues) => {
    const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
    const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`;
    const { photos, price, discount, ...eventData } = event;
    eventData.slug = event?.name + "_" + event?.brand;
    const formData = new FormData();
    const photoUrl = [];
    try {
      if (photos?.length >= 0) {
        for (const item of photos) {
          formData.append("image", item);
          const res = await fetch(url, { method: "POST", body: formData });
          const result = await res.json();
          photoUrl.push(result?.data?.url);
        }
      }
      const res = await createProduct({
        ...eventData,
        photos: photoUrl,
        price:Number(price),
        discount:Number(discount),
      }).unwrap();
      if(res?.success){
        toast.success(res?.message)
      }
      console.log(res);
    } catch (error: any) {
      toast.error(error?.data?.message || error?.message);
    }
  };
  if(isFetching){
    return <div>Loading.....</div>
  }
  return (
    <RHForm onSubmit={productSubmint}>
      <div className="flex justify-center">
        <p className="mt-4 ">product info</p>
      </div>
      <Separator className="mb-4 " />
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <RHInput name="name" placeholder="product name" label="Name" />

        <RHInput name="metaKey" placeholder="Meta key" label="Meta Key" />

        <RHInput
          name="description"
          placeholder="product description"
          label="Description"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <RHInput name="brand" placeholder="Brand name" label="Brand Name" />
        <RHInput name="discount" placeholder="discount" label="Discount" />
        <RHInput name="price" placeholder="product Price" label="Price" />
      </div>
      <FormField
        name="photos"
        render={({ field: { onChange, value, ...field } }) => (
          <FormItem>
            <FormLabel>photos</FormLabel>
            <Input
              style={{ height: "40px" }}
              {...field}
              multiple
              value={value?.fileName}
              onChange={(e) => onChange(e.target.files)}
              type="file"
            />
          </FormItem>
        )}
      />
      <div className="flex justify-center mt-4">
        <p className="mt-4">product category</p>
      </div>
      <Separator className="mb-4" />
      <div className="grid grid-cols-3 items-center gap-4">
        <PHSelect
          label="Primary Category"
          name="categories.primaryCategoryId"
          placeholder="Select Category"
          options={fastData as {label:string, value: string}[]}
        />
        <PHSelect
          label="Secondary Category"
          name="categories.secondaryCategoryId"
          placeholder="Select Category"
          options={secondData as {label:string, value: string}[]}
        />
        <PHSelect
          label="tertiary Category"
          name="categories.tertiaryCategoryId"
          placeholder="Select Category"
          options={thardData as {label:string, value: string}[]}
        />
      </div>
      <div className="flex justify-center">
        {
          isLoading ?<Button disabled className="mt-4 w-96">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button> :
        <Button className="mt-4 w-96" type="submit">
          Submit
        </Button>
        }
      </div>
    </RHForm>
  );
};

export default CreateProductForm;
