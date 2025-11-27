import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/HeroSlider.css";

const HeroSlider = ({ onStateChange }) => {

    const slides = [
        "BIHAR",
        "GUJARAT",
        "KARNATAKA",
        "MADHYA PRADESH"
    ]

    const sliderImages = [
        "https://admin.mbbsway.in/storage/app/public/images/slider/7pK71QN7PRmAs4SHCYTuTV27WDVLvwm8bLPoxnxk.png",
        "https://admin.mbbsway.in/storage/app/public/images/slider/bgjArIBnfN2BiKkOYC7y3PTOIqFAyAHuZKqlKtxY.png",
        "https://admin.mbbsway.in/storage/app/public/images/slider/t8ptLnSkTNxKRDI1yXfEtBbTeMkVeOM6h0d19ZVu.png",
        "https://admin.mbbsway.in/storage/app/public/images/slider/XdPYe6TjjTREa4KsJ61Se2KvvVuaGbiGMvbKaigU.png"
    ];


    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);

        // send updated selection to parent
        onStateChange(swiper.activeIndex);
    };

    const goToSlide = (index) => {
        if (swiperRef.current) swiperRef.current.slideTo(index);

        // Also updates cards
        onStateChange(index);
    };


    return (
        <div className="relative w-screen overflow-hidden">

            {/* Swiper Section */}
            <Swiper
                modules={[Pagination, EffectFade]}
                effect="fade"
                loop={false}
                autoplay={false}
                pagination={{
                    clickable: true,
                    el: ".external-pagination",
                    renderBullet: (index, className) =>
                        `<span class="${className}">${index + 1}</span>`,
                }}
                onSwiper={handleSwiperInit}
                onSlideChange={handleSlideChange}
                className="w-full h-full"
            >
                {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* ✅ External Pagination on the RIGHT EDGE */}
            <div className="external-pagination absolute top-1/2 -translate-y-1/2"></div>
            <div className="bottom-btn-wrapper">
                {slides.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`bottom-btn ${activeIndex === index ? "active" : ""}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

        </div >
    );
};

export default HeroSlider;
