import React, { useState } from "react";
import "../../styles/Testimonials.css";

const TABS = [
    { id: "student", label: "Student" },
    { id: "university", label: "University" },
    { id: "parent", label: "Parent" },
];

const TESTIMONIALS = {
    student: [
        {
            text: `“Thanks to MBBSWay, my dream of studying MBBS abroad became a reality. 
                    The team guided me like family at every step — from choosing the right university 
                    to completing the admission process. Truly grateful for their support!”`,
            name: "Gyan Prakash Sharma",
            college: "Mra Medical Collage Ambedkar Nagar",
            city: "Bhopal",
            image:
                "https://admin.mbbsway.in/storage/app//public/images/testimonial/ceeTREzyvKG3XyXRP9CBx0Xj1GQ5DrZDmcCa3oCW.png",
        },
        {
            text: `“MBBSWay made everything easy. I was confused about the admission 
                    process, but their team helped me step-by-step. Today, I'm living my dream of 
                    becoming a doctor. Truly grateful for their support!”`,
            name: "Chotti Ram",
            college: "Mra Medical Collage Ambedkar Nagar",
            city: "Bhopal",
            image:
                "https://admin.mbbsway.in/storage/app//public/images/testimonial/by1A4bvg9ASC13DYZkDqtE6xUP944iHR8r9n2T9Z.png",
        },
    ],
    university: [
        {
            text: `“Mra is a collaboration and is good consultancy Company”`,
            name: "Mra Medical College",
            college: "Mra Medical College Ambedkar Nagar",
            city: "Ambedkar Nagar",
            image:
                "https://admin.mbbsway.in/storage/app//public/images/testimonial/ctyDyrjOyaEz5btVmd3h0EnBvlyGp1jLxQLmMCZY.png",
        },
    ],
    parent: [
        {
            text: `“”`,
            name: "",
            college: "",
            city: "",
            image:
                "data:image/jpeg;base64,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",
        },
    ],
};

const Testimonials = () => {
    const [activeTab, setActiveTab] = useState("student");
    const [activeIndex, setActiveIndex] = useState(0);

    const items = TESTIMONIALS[activeTab] || [];
    const current = items[activeIndex] || items[0];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setActiveIndex(0);
    };

    const handlePrev = () => {
        if (!items.length) return;
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (!items.length) return;
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">

                {/* === NEW MAIN WRAPPER for left + right === */}
                <div className="testimonials-wrapper">

                    {/* ============ LEFT SIDE ============ */}
                    <div className="testimonials-left">

                        {/* Heading + underline moved here */}
                        <div className="testimonials-heading-wrapper">
                            <h2 className="testimonials-heading">Testimonials</h2>
                            <div className="testimonials-heading-underline" />
                        </div>

                        {/* Tabs */}
                        <div className="testimonials-tabs">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={
                                        "testimonial-tab" +
                                        (activeTab === tab.id ? " testimonial-tab-active" : "")
                                    }
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Testimonial content */}
                        {current && (
                            <div className="testimonial-card">

                                {/* Quote text */}
                                <p className="testimonial-text">{current.text}</p>

                                {/* Student info */}
                                <div className="testimonial-person">
                                    <div className="testimonial-photo">
                                        <img src={current.image} alt={current.name} />
                                    </div>
                                    <div className="testimonial-details">
                                        <p className="testimonial-name">{current.name}</p>
                                        <p className="testimonial-college">{current.college}</p>
                                        <p className="testimonial-city">{current.city}</p>
                                    </div>
                                </div>

                                {/* Dots + arrows */}
                                <div className="testimonial-controls">
                                    <div className="testimonial-dots">
                                        {items.map((_, idx) => (
                                            <span
                                                key={idx}
                                                className={
                                                    "testimonial-dot" +
                                                    (idx === activeIndex ? " testimonial-dot-active" : "")
                                                }
                                            />
                                        ))}
                                    </div>

                                    <div className="testimonial-arrows">
                                        <button
                                            type="button"
                                            className="testimonial-arrow"
                                            onClick={handlePrev}
                                        >
                                            ‹
                                        </button>
                                        <button
                                            type="button"
                                            className="testimonial-arrow"
                                            onClick={handleNext}
                                        >
                                            ›
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ============ RIGHT SIDE (VIDEO) ============ */}
                    <div className="testimonials-right">
                        <div className="testimonials-video-card">
                            <iframe
                                src="https://www.youtube.com/embed/Nl3gK5aSXps"
                                title="Testimonials"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Testimonials;
