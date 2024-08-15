"use client";
import React from "react";
import RHForm from "../form/RHForm";
import { Separator } from "../ui/separator";
import RHInput from "../form/RHInput";
import { Button } from "../ui/button";
import { FieldValues } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { useCreateAddressMutation } from "@/redux/features/Users/AddressSlice";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { addAddress } from "@/redux/features/Products/ProductManagment";

const AddressForm = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch()
  const [createAddress, {isLoading}] = useCreateAddressMutation();
  const router = useRouter()
  const addressSubmit = async (event: FieldValues) => {
    event.userId = user?.userId;
    try {
      const res = await createAddress(event).unwrap();
      if (res?.success) {
        dispatch(addAddress(res?.data?._id))
        router.push("/user/checkout")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RHForm onSubmit={addressSubmit}>
      <div className="flex justify-center">
        <p className="mt-4 ">Address info</p>
      </div>
      <Separator className="mb-4 " />
      <div className="grid grid-cols-3 items-center gap-4 mt-4">
        <RHInput name="name" placeholder="Your name" label="Name" />
        <RHInput name="phone" placeholder="+880 - 123456" label="PhoneNo" />
        <RHInput name="division" placeholder="Chatrogram" label="Division" />
        <RHInput name="district" placeholder="Comilla" label="District" />
        <RHInput
          name="subDistrict"
          placeholder="comilla shodor"
          label="Sub district"
        />
        <RHInput
          name="address"
          placeholder="home-02#house-05"
          label="Address"
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

export default AddressForm;
