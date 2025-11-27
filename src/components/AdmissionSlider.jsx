import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../styles/AdmissionSlider.css";

const slides = [
    "https://admin.mbbsway.in/storage/app//public/images/slider/jUPCFU3WurgHaFdlr7hw0KvY4oh2LMLnOOHcm134.png",
    "https://admin.mbbsway.in/storage/app//public/images/slider/4KXHjEwt0SzvmpfZe2DvNqUPCZuTjQUlLFm8citE.png",
    "https://admin.mbbsway.in/storage/app//public/images/slider/SUcjXFTr3ULpOLlKc2N4x01x7TIusyktgknuMiFc.png",
    "https://admin.mbbsway.in/storage/app//public/images/slider/9lWxbn0FPEdmp2bX4doG0jHV2szSw1NaWTertzfa.png",
];

const AdmissionSlider = () => {
    return (
        <div className="admission-slider-section">
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                effect="fade"
                navigation={true}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                speed={800}
                className="admission-swiper"
                fadeEffect={{ crossFade: true }}
                loopAdditionalSlides={slides.length}
            >
                {slides.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={src}
                            alt={`Admission banner ${idx + 1}`}
                            className="admission-slide-image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdmissionSlider;
