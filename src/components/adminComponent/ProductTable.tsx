"use client"
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import { useGetProductQuery } from "@/redux/features/admin/ProductSlice";
import { TProduct } from "@/types/TProducts";
import { Button } from "../ui/button";
import { Edit2Icon, Trash } from "lucide-react";

const ProductTable = () => {
  const { data, isFetching } = useGetProductQuery(undefined);
  console.log(data?.data?.result)
  console.log(isFetching)
  if(isFetching){
    return <div>Loading...</div>
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Photo</TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Discount</TableHead>
          <TableHead >Brand</TableHead>
          <TableHead >Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.result?.map((item: TProduct) => (
          <TableRow key={item?._id}>
            <TableCell>
              {" "}
              <Image
                className="w-20 h-16"
                src={item?.photos[0]}
                width={500}
                height={500}
                alt=""
              />
            </TableCell>
            {/* <TableCell>{item?.name}</TableCell> */}
            <TableCell>hello</TableCell>
            <TableCell>{item?.slug}</TableCell>
            <TableCell>${item?.price}</TableCell>
            <TableCell>{item?.discount}%</TableCell>
            <TableCell>{item?.brand}</TableCell>
            <TableCell>
              <div>
                <div>
                  <Button className="hover:bg-cyan-700">
                    <Edit2Icon />
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-800 ml-2 text-white">
                    <Trash />
                  </Button>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
