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

const LoginForm = () => {
  const defaultValues = {
    id: "123",
    password: "123654",
  };
  const submitHandler = (event: FieldValues) => {
    console.log(event);
  };
  return (
    <RHForm onSubmit={submitHandler} defaultValues={defaultValues}>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>User Login </CardTitle>
          <CardDescription>please enter your id and password then login </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <RHInput name={"id"} placeholder="Enter your id" label="ID" />
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
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </RHForm>
  );
};

export default LoginForm;
