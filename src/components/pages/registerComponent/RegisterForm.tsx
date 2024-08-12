"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RHForm from "@/components/form/RHForm";
import RHInput from "@/components/form/RHInput";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useCreateUserMutation } from "@/redux/features/Users/UserSlice";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { TResponse } from "@/types/globalResponse";
import { TUser } from "@/types/TCreateUser";

const RegisterForm = () => {
  const [register, {isLoading}] = useCreateUserMutation();

  const defaultValues = {
    name: "123",
    email: "sahedsalma369@gmail.com",
    password: "123654",
  };
  const submitHandler = async (event: FieldValues) => {
    try {
      const result = (await register(event).unwrap()) as TResponse<TUser>
      console.log(result)
      if(result.success){
        toast.success(result?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })

      }
      if(!result.success){
        toast.error(result.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } catch (error) {
      
      
    }
  }

  
  return (
    <div>
    <RHForm onSubmit={submitHandler} defaultValues={defaultValues}>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>User Registition Form </CardTitle>
          <CardDescription>
            please enter your valide infome then register{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <RHInput
              name={"name"}
              placeholder="Enter your password"
              label="Name"
            />
          </div>
          <div>
            <RHInput
              name={"email"}
              placeholder="Enter your email"
              label="Email"
            />
          </div>
          <div>
            <RHInput
              name={"password"}
              placeholder="Enter your password"
              label="Password"
            />
          </div>
        </CardContent>
        <CardFooter>
          {
            isLoading ? <Button disabled className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
          :
          <Button  type="submit" className="w-full">
            Submit
          </Button>
          }
        </CardFooter>
      </Card>
    </RHForm>
    </div>
  );
};

export default RegisterForm;
