"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetCategoryQuery } from "@/redux/features/admin/CategorySlice";
import Image from "next/image";
import { Button } from "../ui/button";
import { Edit2Icon, Trash } from "lucide-react";
type TInvoice = {
  categoryType: string;
  name: string;
  _id: string;
  thumbnail: string;
  slug: string;
};
const CategoryTable = () => {
  const { data, isFetching } = useGetCategoryQuery(undefined);
if(isFetching){
  return <div> Loading....</div>
}  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead >Category Type</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.result?.map((invoice: TInvoice) => (
          <TableRow key={invoice._id}>
            <TableCell>
              {" "}
              <Image
                className="w-32 h-20"
                src={invoice.thumbnail}
                width={500}
                height={500}
                alt=""
              />
            </TableCell>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.slug}</TableCell>
            <TableCell>{invoice.categoryType}</TableCell>
            <TableCell className="text-right">
              <div>
              <Button  className="hover:bg-cyan-700" ><Edit2Icon/></Button>
              <Button className="bg-red-500 hover:bg-red-800 ml-2 text-white"><Trash/></Button>

              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
