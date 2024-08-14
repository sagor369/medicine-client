"use client"
import React from "react";
import PageTitle from "../adminComponent/PageTitle";
import CategoryCart from "./CategoryCart";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const LatestCategory = () => {
    const data = [
        {name: "Sahed"},
        {name: "Tagor"},
        {name: "Ranto"},
        {name: "Islam"},
        {name: "OTC"},
        {name: "Baby"},
    ]
  return (
    <div className="py-6">
      <div className="flex justify-start">
        <PageTitle title="Category" />
      </div>
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Autoplay, Navigation, ]}
        navigation={true}
        className="w-full mt-4 text-center rounded-md"
        breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
      >
        {data?.map((item: {name:string}) => (

          <SwiperSlide>
            <CategoryCart name={item.name}/>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* <div className="grid grid-cols-3 gap-4 items-center py-4">
            {data.map((item:{name: string})=> <CategoryCart name={item.name}/>)}
        </div> */}
    </div>
  );
};

export default LatestCategory;
