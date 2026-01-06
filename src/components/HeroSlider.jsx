import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/HeroSlider.css";

const HeroSlider = ({
    sliders = [],
    states = [],
    onStateChange,
}) => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!sliders.length) return null;

    const labels = states.map(
        (state) => state.title.toUpperCase()
    );

    const getImageUrl = (path) => {
        return `https://admin.mbbsway.in/storage/app/${path}`;
    }

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);

        // send updated selection to parent
        onStateChange(swiper.activeIndex);
    };

    const goToSlide = (index) => {
        // if (swiperRef.current) swiperRef.current.slideTo(index);
        swiperRef.current?.slideTo(index);

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
                {sliders.map((slide, index) => (
                    // <SwiperSlide key={index}>
                    <SwiperSlide key={slide.id || index}>
                        <img
                            src={getImageUrl(slide.bg_image)}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* External Pagination on the RIGHT EDGE */}
            <div className="external-pagination absolute top-1/2 -translate-y-1/2"></div>

            <div className="bottom-btn-wrapper">
                {labels.map((label, index) => (
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
