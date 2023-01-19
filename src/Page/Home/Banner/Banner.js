import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Banner.css'

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>

            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className=' relative' src="http://finestwp.com/payonline/wp-content/uploads/2022/12/banner-1-1.jpg" alt='' />
                    <div className='absolute top-[25%] left-[10%] text-white'>
                        <h1 className='lg:text-8xl font-bold text-2xl'>Payroll &</h1>
                        <h2 className='lg:text-8xl font-bold mt-2'>HR Solutions</h2>
                        <h3 className='lg:text-4xl font-semi-bold mt-2'>to take your business further</h3>
                        <Link to='/'
                            className="lg:mt-8 group relative inline-block lg:text-sm lg:font-medium text-white focus:outline-none focus:ring"
                        >
                            <span
                                className="rounded-3xl absolute inset-0 border border-red-600 group-active:border-red-500"
                            ></span>
                            <span
                                className="rounded-3xl block border border-red-600 bg-red-600 lg:px-12 lg:py-3 px-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                            >
                                REQUEST A MEETING
                            </span>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' relative' src="http://finestwp.com/payonline/wp-content/uploads/2022/12/banner-1-2.jpg" alt='' />
                    <div className='absolute top-[25%] left-[10%] text-white'>
                        <h1 className='lg:text-8xl font-bold text-2xl'>Payroll &</h1>
                        <h2 className='lg:text-8xl font-bold mt-2'>HR Solutions</h2>
                        <h3 className='lg:text-4xl font-semi-bold mt-2'>to take your business further</h3>
                        <Link to='/'
                            className="lg:mt-8 group relative inline-block lg:text-sm lg:font-medium text-white focus:outline-none focus:ring"
                        >
                            <span
                                className="rounded-3xl absolute inset-0 border border-red-600 group-active:border-red-500"
                            ></span>
                            <span
                                className="rounded-3xl block border border-red-600 bg-red-600 lg:px-12 lg:py-3 px-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                            >
                                REQUEST A MEETING
                            </span>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src="http://finestwp.com/payonline/wp-content/uploads/2022/12/banner-1-3.jpg" alt='' />
                    <div className='absolute top-[25%] left-[10%] text-white'>
                        <h1 className='lg:text-8xl font-bold text-2xl'>Payroll &</h1>
                        <h2 className='lg:text-8xl font-bold mt-2'>HR Solutions</h2>
                        <h3 className='lg:text-4xl font-semi-bold mt-2'>to take your business further</h3>
                        <Link to='/'
                            className="lg:mt-8 group relative inline-block lg:text-sm lg:font-medium text-white focus:outline-none focus:ring"
                        >
                            <span
                                className="rounded-3xl absolute inset-0 border border-red-600 group-active:border-red-500"
                            ></span>
                            <span
                                className="rounded-3xl block border border-red-600 bg-red-600 lg:px-12 lg:py-3 px-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                            >
                                REQUEST A MEETING
                            </span>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Banner;