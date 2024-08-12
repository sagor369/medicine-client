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
import { useLoginMutation } from "@/redux/features/auth/AuthApi";
import { Loader2 } from "lucide-react";
import { verifyToken } from "@/components/utils/VarifyToken";
import { setUser, TUser } from "@/redux/features/auth/AuthSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const defaultValues = {
    email: "sahedsalma369@gmail.com",
    password: "123654",
  };
  const dispatch = useAppDispatch();
  const route = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const submitHandler = async (event: FieldValues) => {
    try {
      const res = await login(event).unwrap();
      if (res?.data?.success) {
        toast.success(res?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(res?.data?.message, {
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
      const token = res?.data?.accessToken;
      const decode = verifyToken(token) as TUser;
      dispatch(setUser({ user: { ...decode }, token }));
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RHForm onSubmit={submitHandler} defaultValues={defaultValues}>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>User Login </CardTitle>
          <CardDescription>
            please enter your id and password then login{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
              label="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          {isLoading ? (
            <Button disabled className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </RHForm>
  );
};

export default LoginForm;
