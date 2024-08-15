"use client"
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { Edit2Icon, Minus, Plus, Trash } from "lucide-react";
import { minusQuantity, removeCart, updateQuantity } from "@/redux/features/Products/ProductManagment";

const CartTable = () => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch()
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((item) => (
          <TableRow key={item.productId}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell><div className="flex gap-2 my-4">
            <Button onClick={()=>dispatch(updateQuantity(item.productId))}>
              <Plus className="size-6 " />{" "}
            </Button>
            <p className="text-2xl font-semibold px-4">{item.quantity}</p>
            <Button onClick={()=>dispatch(minusQuantity(item.productId))}>
              <Minus className="size-6" />
            </Button>
          </div> </TableCell>

            <TableCell>
            <div>
              <Button  className="hover:bg-cyan-700" ><Edit2Icon/></Button>
              <Button onClick={()=>dispatch(removeCart(item.productId))}  className="bg-red-500 hover:bg-red-800 ml-2 text-white"><Trash/></Button>

              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
