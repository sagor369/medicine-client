import LoginForm from "@/components/pages/loginComponent/LoginForm";
import PageLayout from "@/components/utils/PageLayout";
import Image from "next/image";
import img from "@/assest/login.jpg"

const LoginPage = () => {
  return (
    <PageLayout>
      <div className=" grid grid-cols-2 justify-center items-center gap-4 mt-8">
    <Image src={img} alt=""/>
      <LoginForm></LoginForm>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
