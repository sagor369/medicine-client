"use client";
import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/features/admin/ProductSlice";
import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { AddToCart } from "@/redux/features/Products/ProductManagment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const user = useAppSelector(selectCurrentUser);
  const { data, isLoading } = useGetSingleProductQuery(id);
  console.log(data);
  const addToCart = () => {
    const prodactData = {
      productId: data?.data?._id,
      name: data?.data?.name,
      price: data?.data?.price,
      quantity: 1,
    };
    if (!user) {
      redirect("/login");
    }
    dispatch(AddToCart(prodactData));
    toast.success("product add to cart");
  };
  // const { brand, name, price, discount, discription } = data?.data
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div>
        <Image
          src={data?.data?.photos[0]}
          alt=""
          width={500}
          height={500}
          className="w-full h-full "
        />
      </div>
      <div>
        <h2 className="text-xl font-bold font-sans py-2">
          Name: {data?.data?.name}
        </h2>
        <p className="text-lg ">
          Discription :{" "}
          <span className="text-slate-400 my-4">{data?.data?.description}</span>
        </p>
        <p className="text-lg ">
          Product Brand:{" "}
          <span className="text-slate-400">{data?.data?.brand}</span>{" "}
        </p>
        <div className="line-through inline-block my-4">
          <p className="text-lg bg-orange-200  px-4 py-2">
            Price: ${data?.data?.price}
          </p>
        </div>
        <p className="text-xl font-sans font-semibold">
          Discount Price: $
          {((data?.data?.price * data?.data?.discount) / 100).toFixed(2)}
        </p>

        <div className="flex justify-between items-center">
          <Button onClick={addToCart}>Add To Cort</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
