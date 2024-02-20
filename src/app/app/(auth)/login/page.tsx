"use client";
import Image from "next/image";
import React, { useState } from "react";
import petals from "../../../../assets/images/petals.webp";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginValidator, TLoginCredentialsValidator } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginCredentialsValidator>({
    resolver: zodResolver(LoginValidator),
  });

  const onSubmit = async (data: TLoginCredentialsValidator) => {
    console.log(data);
  };

  return (
    <div className=" flex ">
      <div className=" flex-1 p-2 h-dv  xl:flex hidden">
        <Image
          src={petals}
          alt="login-image"
          className="h-full w-full object-cover rounded-sm"
        />
      </div>
      <div className=" flex-1 flex flex-col   justify-center  h-dvh">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[30rem] w-full mx-auto "
        >
          <h1 className="  font-mona font-medium  text-3xl">Welcome Back!</h1>
          <p className="  text-muted-foreground mt-2 text-sm">
            Please login to the admin account
          </p>
          <div className="flex flex-col  gap-3 mt-16">
            <Label className=" text-sm  text-foreground/75">Email</Label>
            <Input
              {...register("email")}
              id="login-email"
              placeholder="Enter Email"
              type="email"
              className="py-6"
            />
            {errors?.email && (
              <p className="text-xs mt-1 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col  gap-3 mt-6">
            <Label className=" text-sm  text-foreground/75">Password</Label>
            <Input
              {...register("password")}
              id="login-password"
              placeholder="Enter Password"
              className="py-6"
              type="password"
            />
            {errors?.password && (
              <p className="text-xs mt-1 text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mt-8">
            <Button
              variant="custom"
              className="w-full  h-14 transition-colors animate-shimmer"
              isLoading={isPending}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
