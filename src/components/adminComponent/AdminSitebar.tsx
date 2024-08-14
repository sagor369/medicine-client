"use client";
import React from "react";
import { Separator } from "../ui/separator";
import Routes from "./Adminutils";
import Navlink from "../utils/Navlink";
import { UserCircle } from "lucide-react";

const AdminSitebar = () => {
  return (
    <div className="bg-gray-500 bg-opacity-25 min-h-[100vh] h-full px-4 py-8">
      <div className="flex gap-4 items-center">
        <div>
          <UserCircle className="size-10"/>
        </div>
        <div>

        <h2 className="text-xl font-bold font-sans">
          Hi, <br /> MD Sahidul islam
        </h2>
        <p>Admin Dashboard</p>
        </div>
      </div>
      <Separator className="my-4 bg-black" />
      <div>
      <ul className="mb-auto pt-1">
            {Routes.map((dt, i) => (
              <Navlink
                exact={dt.link == "/user"}
                activeClassName=" font-bold"
                className=" text-gray-600"
                href={dt.link}
                key={i}
              >
                <p className="flex cursor-pointer gap-4 items-center px-8 mb-5">
                  <span className="">{dt.icon} </span>
                  {dt.title}{" "}
                </p>
              </Navlink>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default AdminSitebar;
