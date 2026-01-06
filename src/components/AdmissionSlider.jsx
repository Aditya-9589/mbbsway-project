import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../styles/AdmissionSlider.css";


const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const AdmissionSlider = ({ sliders = [] }) => {

    if (!sliders.length) return null;

    return (
        <div className="admission-slider-section">
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                effect="fade"
                navigation
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={800}
                fadeEffect={{ crossFade: true }}
                className="admission-swiper"
            >
                {sliders.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <a href="{slide.link}" target="_blank" rel="noopener noreferrer" >
                            <img 
                                src={`${BASE_URL}${slide.bg_image}`}
                                alt={slide.title}
                                className="admission-slide-image"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdmissionSlider;
