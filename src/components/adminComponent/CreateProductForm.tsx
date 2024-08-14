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

const CreateProductForm = () => {
  const productSubmint = async(event: FieldValues) => {
    const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
      const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`;
    const {photos, ...eventData} = event
      eventData.slug = event?.name + "_" + event?.metakey;
    const formData = new FormData();
    if (event?.photos?.length >= 0) {
      for (const item of event?.photos) {
        formData.append("photos", item);
      }
    }
    try {
      const res = await fetch(url, { method: "POST", body: formData });
    const result = await res.json();

    
    } catch (error:any) {
      toast.error(error?.data?.message || "image hosting problem")
    }
    
  };
  return (
    <RHForm onSubmit={productSubmint}>
      <div className="flex justify-center">
        <p className="mt-4 ">product info</p>
      </div>
      <Separator className="mb-4 " />
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <RHInput name="name" placeholder="product name" label="Name" />

        <RHInput name="metakey" placeholder="Meta key" label="Meta Key" />

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
          options={[{ label: "sahed", value: "sahed" }]}
        />
        <PHSelect
          label="Secondary Category"
          name="categories.secondaryCategoryId"
          placeholder="Select Category"
          options={[{ label: "sahed", value: "sahed" }]}
        />
        <PHSelect
          label="tertiary Category"
          name="categories.tertiaryCategoryId"
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

export default CreateProductForm;
