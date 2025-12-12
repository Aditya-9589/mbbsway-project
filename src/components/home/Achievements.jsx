import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../styles/Achievements.css";

const achievementsData = [
    {
        id: 1,
        title: "Image1",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/QZn2nNh5N2TQQ2AypNFXHmn2FWQ8Gz0K8007C7ml.png",
    },
    {
        id: 2,
        title: "Image2",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/G4hyHK3rVvSgOJgFG3imLbVKsGtGcgnfKij1IiUN.png",
    },
    {
        id: 3,
        title: "Image3",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/VjoVwFyaVZmre1uhVRR8qoAcciUjK7Gx3vNN9en2.png",
    },
    {
        id: 4,
        title: "Image4",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/o1vWLRdMqM3ZwiEbcUgz6C7N5P3oIQZdjuIKlwRM.png",
    },
    {
        id: 5,
        title: "Image5",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/dsiiLvyfICdjgC0LydmudwYm1UEgruWNsYkTSxPQ.png",
    },
    {
        id: 6,
        title: "Image6",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/9tQzx5iBDe5o7ZC0NSRbxwLxfKfAwEM4lke6WklC.png",
    },
    {
        id: 7,
        title: "Image7",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/lVRT6vSLY9YABYH3vMG3L6xbidJeaBJb7ciZlIOO.png",
    },
    {
        id: 8,
        title: "Image8",
        src: "https://admin.mbbsway.in/storage/app//public/images/achievment/6Ei6YYhoMauWU8n9s7LKzy8XE6DfrmrhmKJ77YEH.png",
    },
];

const Achievements = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="achievements-slider-section">
            <div className="achievements-slider-wrapper">
                {/* Header */}
                <div className="achievements-slider-header">
                    <span className="achievements-slider-subtitle">Our Achievements</span>
                    <div className="achievements-slider-underline"></div>
                </div>

                <p className="achievements-slider-description">
                    Over the last 10 years, our passion to guide and help Medical aspirants
                    has made us one of the highest rated NEET counselling company in India.
                </p>

                {/* Hover should trigger ONLY on slider area */}
                <div
                    className="achievements-slider-hover-zone"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {!isHovered ? <NormalSlider /> : <HoverSlider />}
                </div>

            </div>
        </section>
    );
};

const NormalSlider = () => {
    return (
        <div className="achievements-slider-normal-wrapper">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={40}
                // loop={true}
                initialSlide={0}
                loop={false}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false,
                }}
                speed={800}
                className="achievements-slider-normal"
            >
                {achievementsData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="achievements-slider-card">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="achievements-slider-img"
                            />
                            <h3 className="achievements-slider-title">{item.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const HoverSlider = () => {
    return (
        <div className="achievements-slider-hover-wrapper">
            <Swiper
                modules={[Navigation]}
                navigation
                loop
                centeredSlides={true}
                // spaceBetween={40}
                spaceBetween={50}
                slidesPerView={3}
                initialSlide={4}
                loopAdditionalSlides={3}
                className="achievements-slider-hover"
            >
                {achievementsData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="achievements-slider-hover-slide">
                            <img
                                src={item.src}
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
