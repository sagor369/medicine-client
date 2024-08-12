import RegisterForm from "@/components/pages/registerComponent/RegisterForm";
import PageLayout from "@/components/utils/PageLayout";
import React from "react";
import img from "@/assest/signup.png";
import Image from "next/image";

const Registerpage = () => {
  return (
    <PageLayout>
      <div className=" grid grid-cols-2 justify-center items-center gap-4 mt-8">
        <Image src={img} alt="" />
        <RegisterForm></RegisterForm>
      </div>
    </PageLayout>
  );
};

export default Registerpage;
