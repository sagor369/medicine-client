"use client";
import React from "react";
import RHForm from "../form/RHForm";
import RHInput from "../form/RHInput";
import { FieldValues } from "react-hook-form";
import PHSelect from "../form/PHSelect";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { selectOption } from "../form/SelectOption";
import { FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useCreateCategoryMutation } from "@/redux/features/admin/CategorySlice";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const CreateCategory = () => {
  const [Category, {isLoading}] = useCreateCategoryMutation()
  const selectData = selectOption(["primary", "secondary", "tertiary"]);
  const productSubmint = async(event: FieldValues) => {
    console.log(event)
    const {image, ...eventData} = event
    eventData.slug = event.name + "-" + event.categoryType;

    try {
      const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
      const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`;
    const formData = new FormData();
    formData.append("image", image);
    const respons = await fetch(url, { method: "POST", body: formData });
    const result = await respons.json();
    const res= await Category({...eventData, thumbnail:result?.data?.url })
    
    if(res?.data?.success){
      toast.success(res?.data?.message)
    }
    console.log(res);
  } catch (error: any) {
    toast.error(error?.data?.message || error?.message);
  }
  };
  return (
    <RHForm onSubmit={productSubmint}>
      <div className="flex justify-center">
        <p className="mt-4 ">Category info</p>
      </div>
      <Separator className="mb-4 " />
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <RHInput name="name" placeholder="product name" label="Name" />
        <FormField
          name="image"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>thumbnail</FormLabel>
              <Input
                style={{ height: "40px" }}
                {...field}
                value={value?.fileName}
                onChange={(e) => onChange(e.target.files?.[0])}
                type="file"
              />
            </FormItem>
          )}
        />{" "}
        <PHSelect
          label="Category Type"
          name="categoryType"
          placeholder="Select Category Type"
          options={selectData}
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

export default CreateCategory;
