"use client"
import React from "react";
import PageTitle from "../adminComponent/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useGetCategoryQuery } from "@/redux/features/admin/CategorySlice";
import Image from "next/image";

const LatestCategory = () => {
  const {data, isLoading} = useGetCategoryQuery(undefined)
  if(isLoading){
    return <div>Loading....</div>
  }
    
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
        {data?.data?.result?.map((item: {name:string,thumbnail:string, _id: string }) => (

          <SwiperSlide>
            <div>
            <Image className='w-full h-48 ' src={item.thumbnail} alt='' width={500} height={500}/>
            <h2 className='text-2xl font-bold font-sans text-slate-500 uppercase bg-primary py-2 text-center'> {item.name}</h2>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestCategory;
