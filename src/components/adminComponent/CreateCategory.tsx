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

const CreateCategory = () => {
  const selectData = selectOption(["primary", "secondary", "tertiary"]);
  const productSubmint = async(event: FieldValues) => {
    const {image, ...eventData} = event
    eventData.slug = event.name + "-" + event.categoryType;

    try {
      const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
      const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`;
    const imageUrl = image[0];
    const formData = new FormData();
    formData.append("image", imageUrl);
    const res = await fetch(url, { method: "POST", body: formData });
    const result = await res.json();
    if (!result.success) {
      return (result.error);
    }
    } catch (error) {
      
      console.log(error);
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
        <Button className="mt-4 w-96" type="submit">
          Submit
        </Button>
      </div>
    </RHForm>
  );
};

export default CreateCategory;
