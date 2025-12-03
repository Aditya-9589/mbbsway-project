import React from 'react'
import '../../styles/AchievementsSection.css'
import studentImage from "../../assets/achievements/Student.png";
import counsellingImage from "../../assets/achievements/Counselling.png"
import mbbsImage from "../../assets/achievements/MBBS.png"
import mdmsImage from "../../assets/achievements/Md&Ms.png"
import bamsImage from "../../assets/achievements/BAMS.png"


const AchievementsSection = () => {
    const achievements = [
        {
            // img: "https://admin.mbbsway.in/storage/app//public/images/counter/hIhFchFK74P72x5RwIeACIfkXiTilBwR5bNEer3N.png",
            img: studentImage,
            number: "400+",
            title: "Student Assisted",
        },
        {
            // img: "https://admin.mbbsway.in/storage/app//public/images/counter/HO5pXetoNUVLwwla9iOSljnd4XxAeANg7RQGHoSf.png",
            img: counsellingImage,
            number: "800+",
            title: "Counselling one to one",
        },
        {
            // img: "https://admin.mbbsway.in/storage/app//public/images/counter/cbeFNK4Pm19CYuwifGC3Bkc9ABuwItfeYE7Nu88E.png",
            img: mbbsImage,
            number: "1900+",
            title: "MBBS Admissions",
        },
        {
            // img: "https://admin.mbbsway.in/storage/app//public/images/counter/ZMYLYXpXBBEycy6XuAj32XIrS4UbYOpgW4JEmkuN.png",
            img: mdmsImage,
            number: "1900+",
            title: "MD & MS Admissions",
        },
        {
            // img: "https://admin.mbbsway.in/storage/app//public/images/counter/vlgp0TKpFQ3YdaXRIg99BVQDGf6aTIjwEihZplNG.png",
            img: bamsImage,
            number: "1000+",
            title: "BAMS Admissions",
        },
    ];

    return (
        <div className="achievements-section">
            <div className="achievements-container">

                {/* Heading */}
                <div className="achievements-heading">
                    Our Achievement as Medical Education Consultants
                    <div className="heading-underline"></div>
                </div>

                {/* Grid */}
                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div className="achievement-card-wrapper" key={index}>
                            <div className="achievement-card">

                                {/* Icon */}
                                <div className="achievement-icon">
                                    <img
                                        src={item.img}
                                        alt="icon"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill"
                                        }}
                                    />
                                </div>

                                {/* Number */}
                                <p className="achievement-number">{item.number}</p>

                                {/* Title */}
                                <p className="achievement-title">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AchievementsSection;
