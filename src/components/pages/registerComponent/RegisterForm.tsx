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

const RegisterForm = () => {
    const defaultValues = {
        id: "123",
        password: "123654",
      };
      const submitHandler = (event: FieldValues) => {
        
      };
    return (
        <RHForm onSubmit={submitHandler} defaultValues={defaultValues}>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>User Registition Form </CardTitle>
          <CardDescription>please enter your valide infome then register </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          
          <div>
            <RHInput
              name={"password"}
              placeholder="Enter your password"
              label="password"
            />
          </div>
          <div>
            <RHInput name={"email"} placeholder="Enter your email" label="Email" />
          </div>
          <div>
            <RHInput name={"password"} placeholder="Enter your password" label="Password" />
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

export default RegisterForm;