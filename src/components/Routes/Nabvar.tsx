"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { USER_ROLE } from "@/types/TCreateUser";

const Nabvar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const {products} = useAppSelector((state) =>state.product)
  const route = useRouter();

  const logoutHandle = () => {
    dispatch(logout());
    route.push("/");
  };
  return (
    <div className=" flex justify-between items-center p-4 border-2 border-b border-black">
      <Link href={"/"} className="">
        <h2 className="text-3xl font-bold font-serif ">
          <span className="text-red-400 text-4xl">S</span>
          adhin
          <span className="text-red-400 text-4xl">M</span>
          edicine
        </h2>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink className="hover:border-b border-black p-2 font-semibold">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/products"} legacyBehavior passHref>
              <NavigationMenuLink className="hover:border-b border-black p-2 font-semibold">
                Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {user && (
            <NavigationMenuItem>
              <Link
                href={`${
                  user?.role === USER_ROLE.admin ||
                  user?.role === USER_ROLE.superAdmin
                    ? "/admin/dashboard"
                    : "/user/dashboard"
                }`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="hover:border-b border-black p-2 font-semibold">
                  Deshboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-2 justify-end items-center">
        {user ? (
          <Button
            onClick={logoutHandle}
            className=" bg-black text-primary hover:text-black"
          >
            Logout
          </Button>
        ) : (
          <Link href={"/login"}>
            <Button className=" bg-black hover:text-black text-primary">
              Login
            </Button>
          </Link>
        )}
        <Link href={"/add-cart"}>
          <Button className="bg-transparent border border-black">
             <sup className="text-red-500 text-lg ">{products.length}</sup>
            <ShoppingBag />
          </Button>
        </Link>
        <Link href={"/register"}>
          <Button className="bg-orange-400 text-white hover:text-black text-lg">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Nabvar;
