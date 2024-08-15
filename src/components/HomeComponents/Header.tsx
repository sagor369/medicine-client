"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "@/components/HomeComponents/style.css";
import Image from "next/image";
import { useGetCategoryQuery } from "@/redux/features/admin/CategorySlice";

const Header = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}
      navigation={true}
      className="w-full text-center rounded-md"
    >
      {data?.data?.result?.map((item: {name:string,thumbnail:string, _id: string }) => (
        <SwiperSlide>
          <div className="font-barlow flex justify-center items-center gap-2 ">
            <Image
              width={500}
              height={500}
              src={item.thumbnail}
              alt={item.name}
              className=" h-96 w-2/3 object-cover transition-opacity duration-300 hover:opacity-75"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
