"use client"
import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { removeCart } from "@/redux/features/Products/ProductManagment";
import { useCreateOrdersMutation } from "@/redux/features/Users/OrderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CreditCard} from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const ConfirmPage = () => {
  const router = useRouter();
  const { total, totalQuantity, products, address } = useAppSelector(
    (state) => state.product
  );
  const user = useAppSelector(selectCurrentUser)
//   {
//     
//     shippingAddress: Types.ObjectId;
  const [Order, {isLoading}] = useCreateOrdersMutation()
  const dispatch = useAppDispatch();
  const clearData = async() => {
    const orderData = {
        userId: user?.userId,
        orderDate: new Date(),
        totalAmount: total,
        item:[...products],
        shippingAddress: address

    }
    const res = await Order(orderData).unwrap()
    console.log(res)
    products.map(({ _id }) => {
      dispatch(removeCart(_id));
    });
    // router.push("/");
  };
  return (
    <div className=" lg:w-80 w-full h-full bg-primary bg-opacity-35 rounded">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-dark">Order Summary</h1>
        <p className="text-sm text-dark mt-2">
          Selected Items : {totalQuantity}
        </p>
        <p className="text-sm text-dark mt-2">Total Price : {total}</p>
        <p className="text-sm text-dark mt-2">
          Tax : {(total * 0.01).toFixed(2)}
        </p>
        <h3 className="text-xl font-semibold text-dark mt-4">
          Grand Total ${(total * 0.01 + total).toFixed(2)}
        </h3>
      </div>
      <div className="px-4 pb-6">
        {" "}
        <Button onClick={clearData} className="bg-green-600 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center">
          <span>Confirm Order</span>
          <CreditCard className="inline" width={15} height={15} />
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPage;
