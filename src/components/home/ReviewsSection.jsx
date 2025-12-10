import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../styles/ReviewsSection.css";

const reviewData = {
    google: [
        {
            name: "Umakant Rajpoot",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/gV2IbwGf74SWNH5l9UNZDoCJrfzG4vbRGp5JQ1v4.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Sandeep Patel",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/XzFTSAhBv83gqRpLysDbQ516T1AwdgMdP0ViXC5T.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Kishan Kumar",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/H26k4beKqukkH9u2jMMQg0pCJ9jGwcALtuWVluNu.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Amrendra Pratap Singh",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/Ukd8IIVcOrXOUFk7657EwbzDDt4yZG7zNAdc5mSr.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ],

    facebook: [
        {
            name: "Prateek Soni",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/h7bUE5fUyQ6jTKWq3YoGcPMXr117uKHZ09JwY7u1.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Yogesh Sharma",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/Idw33x9Tj3rBxNgADoGR0VeYmqyKM2K3eOriiFME.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Ram Prasad Mishra",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/4yGT0KCDhiIJevwnAwHuuw5BBnwb8Ncohh2HKha2.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Shubham Ghatode",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/5SidEjiK0tGKDAu0wksnDworWTWYcxVDpk6QuDyi.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Ritesh Rajput",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/QkUr6gKGsO0BLAqXKxyAMHhuNdNDYPKk9Y1ZSUMV.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ],

    instagram: [
        {
            name: "Veer Mehra",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/dAvo2GKrITTTmEYIDbT3pcVIHM7CLyQ55Se52mmW.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Hariom Saran",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/8SnmgWIaWKw1UAUFiHjO40HUqaoKeWQ8oaw4g8qB.png",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Shubham Pandey",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/7mMl6AfaGDKfo1z7wr0zW3zF83GqBnrMfWXlj9BJ.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "Ayush Kumar Pathak",
            city: "Bhopal",
            img: "https://admin.mbbsway.in/storage/app//public/images/review/ormJCZwYGqO2yuySLvwat4SfGgHByJXVcKHPd3lg.jpg",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ]
};

const tabs = [
    {
        id: "google",
        alt: "Google",
        src: "https://mbbsway.in/static/media/homereviewvectorgoogleicon.b0eee2254e4f9d955e37.png",
    },
    {
        id: "facebook",
        alt: "Facebook",
        src: "data:image/png;base64,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",
    },
    {
        id: "instagram",
        alt: "Instagram",
        src: "https://mbbsway.in/static/media/homereviewinstaicon.0c6bafbdd175dfa21f04.png",
    },
];

const ReviewsSection = () => {
    const [activeTab, setActiveTab] = useState("google");

    return (
        <div className="reviews-section-wrapper">

            <div className="reviews-section-container">

                {/* TABS */}
                <div className="reviews-tabs-wrapper">
                    <div className="reviews-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`reviews-tab-btn ${activeTab === tab.id ? "reviews-tab-btn--active" : ""}`}
                            >
                                <img src={tab.src} alt={tab.alt} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="reviews-main-wrapper">
                    <div className="reviews-main-inner">

                        {/* Heading */}
                        <div className="reviews-heading-wrapper mb-6">
                            <h2 className="reviews-heading">
                                We have the best review in Google
                            </h2>
                        </div>

                        {/* Main Layout */}
                        <div className="reviews-layout">

                            {/* Left Panel */}
                            <div className="reviews-left-panel">
                                <p className="reviews-rating">Excellent</p>
                                <div className="reviews-stars">⭐⭐⭐⭐⭐</div>
                                <span className="reviews-basedon">Based on <b>300 reviews</b></span>
                                <div className="reviews-platform-logo">
                                    <img
                                        src={tabs.find(t => t.id === activeTab).src}
                                        alt={activeTab}
                                    />
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="reviews-right-panel">
                                <div className="reviews-swiper-wrapper">
                                    <Swiper
                                        modules={[Navigation]}
                                        navigation
                                        loop={true}
                                        spaceBetween={60}
                                        slidesPerView={3}
                                        centeredSlides={true}
                                        className="reviews-swiper"



                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1,
                                                centeredSlides: true,
                                            },
                                            600: {
                                                slidesPerView: 3,
                                                centeredSlides: true,
                                                // centeredSlides: false,
                                            },
                                            900: {
                                                slidesPerView: 3,
                                                centeredSlides: true,
                                            }
                                        }}

                                        // className="reviews-swiper"


                                    >
                                        {/* {reviews.map((r, index) => ( */}
                                        {[...reviewData[activeTab], ...reviewData[activeTab]].map((r, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="review-card-wrapper">
                                                    <div className="review-card">

                                                        <div className="review-card-header">
                                                            <div className="review-card-user">
                                                                <img src={r.img} className="review-user-img" />
                                                                <div>
                                                                    <h3 className="review-user-name">{r.name}</h3>
                                                                    <p className="review-user-city">{r.city}</p>
                                                                </div>
                                                            </div>

                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                                                                className="review-google-icon"
                                                                alt=""
                                                            />
                                                        </div>

                                                        <p className="review-card-text">
                                                            {r.review}
                                                        </p>

                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewsSection;
