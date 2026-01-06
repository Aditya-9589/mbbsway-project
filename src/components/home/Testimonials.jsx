import React, { useState, useMemo } from "react";
import "../../styles/Testimonials.css";

const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const Testimonials = ({ testimonialsData }) => {

    // Hooks ALWAYS at the top 
    const [activeTab, setActiveTab] = useState("Student");
    const [activeIndex, setActiveIndex] = useState(0);

    // Safe fallback object 
    const {
        title = "",
        youtub_link = "",
        Student = [],
        University = [],
        Parent = []
    } = testimonialsData || {};
    
    const TABS = useMemo(() => ([
        { id: "Student", label: "Student", items: Student },
        { id: "University", label: "University", items: University },
        { id: "Parent", label: "Parent", items: Parent },
    ]), [Student, University, Parent]);

    
    const activeItems = TABS.find(tab => tab.id === activeTab)?.items || [];
    
    const current = activeItems[activeIndex] || activeItems[0];
    
    // NOW safe to return 
    if (!testimonialsData) return null;


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setActiveIndex(0);
    };

    const handlePrev = () => {
        if (!activeItems.length) return;
        setActiveIndex((prev) => (prev === 0 ? activeItems.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (!activeItems.length) return;
        setActiveIndex((prev) => (prev === activeItems.length - 1 ? 0 : prev + 1));
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
                            <h2 className="testimonials-heading">{title}</h2>
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
                                <p className="testimonial-text">{current.comment}</p>

                                {/* Student info */}
                                <div className="testimonial-person">
                                    <div className="testimonial-photo">
                                        <img
                                            src={`${BASE_URL}${current.image}`}
                                            alt={current.name}
                                        />
                                    </div>
                                    <div className="testimonial-details">
                                        <p className="testimonial-name">{current.name}</p>
                                        <p className="testimonial-college">{current.college}</p>
                                        <p className="testimonial-city">{current.address}</p>
                                    </div>
                                </div>

                                {/* Dots + arrows */}
                                <div className="testimonial-controls">
                                    <div className="testimonial-dots">
                                        {activeItems.map((_, idx) => (
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
                                // src="https://www.youtube.com/embed/Nl3gK5aSXps"
                                src={youtub_link.replace("watch?v=", "embed/")}
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
