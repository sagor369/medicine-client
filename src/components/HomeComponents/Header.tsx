"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "@/components/HomeComponents/style.css";
import Image from 'next/image';
 

const Header = () => {
    const data = [
        {name: "sahed"},
        {name: "sagor"},
        {name: "santo"},
        {name: "islam"},
    ]
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
        {data?.map((item: {name:string}) => (

          <SwiperSlide>
            <div className="font-barlow flex justify-center items-center gap-2 ">
              <Image width={500} height={500} src={"https://via.placeholder.com/350?text=Sahed"}
          alt={item.name}
          className=" h-48 object-cover transition-opacity duration-300 hover:opacity-75"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default Header;