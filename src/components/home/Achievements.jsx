import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../styles/Achievements.css";

const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const Achievements = ({ achievementsData }) => {

    const [isHovered, setIsHovered] = useState(false);

    if (!achievementsData) return null;

    const {title, sub_title, achievment = [] } = achievementsData;

    if (!achievment.length) return null;

    return (
        <section className="achievements-slider-section">
            <div className="achievements-slider-wrapper">
                {/* Header */}
                <div className="achievements-slider-header">
                    <span className="achievements-slider-subtitle">{title}</span>
                    <div className="achievements-slider-underline"></div>
                </div>

                <p className="achievements-slider-description">
                    {sub_title}
                </p>

                {/* Hover should trigger ONLY on slider area */}
                <div
                    className="achievements-slider-hover-zone"
                    // onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                >
                    {!isHovered ? (
                        <NormalSlider data={achievment} />
                    ) : (
                        <HoverSlider data={achievment} />
                    )}
                </div>

            </div>
        </section>
    );
};

const NormalSlider = ({ data }) => {
    return (
        <div className="achievements-slider-normal-wrapper">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={40}
                loop={false}
                initialSlide={0}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false,
                }}
                speed={800}
                className="achievements-slider-normal"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="achievements-slider-card">
                            <img
                                src={`${BASE_URL}${item.image}`}
                                alt={item.title}
                                className="achievements-slider-img"
                            />
                            <h3 className="achievements-slider-title">
                                {item.title}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const HoverSlider = ({ data }) => {
    return (
        <div className="achievements-slider-hover-wrapper">
            <Swiper
                modules={[Navigation]}
                navigation
                loop
                centeredSlides={true}
                spaceBetween={50}
                slidesPerView={3}
                // initialSlide={4}
                initialSlide={Math.floor(data.length / 2)}
                loopAdditionalSlides={3}
                className="achievements-slider-hover"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="achievements-slider-hover-slide">
                            <img
                                src={`${BASE_URL}${item.image}`}
                                alt={item.title}
                                className="achievements-slider-hover-img"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Laptop frame */}
            <div className="achievements-slider-laptop-frame">
                <img
                    // src="https://mbbsway.in/static/media/homeourachivementslidercompfiame.28703a64f80d2edd3471.png"
                    alt="frame"
                />
            </div>
        </div>
    );
};

export default Achievements;
