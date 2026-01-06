import React from 'react'
import '../../styles/AchievementsSection.css'

const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const AchievementsSection = ({ countersData }) => {

    if (!countersData) return null;

    const { title, counters = [] } = countersData;

    return (
        <div className="achievements-section">
            <div className="achievements-container">

                {/* Heading */}
                <div className="achievements-heading">
                    {title}
                    <div className="heading-underline"></div>
                </div>

                {/* Grid */}
                <div className="achievements-grid">
                    {counters.map((item) => (
                        <div className="achievement-card-wrapper" key={item.id}>
                            <div className="achievement-card">

                                {/* Icon */}
                                <div className="achievement-icon">
                                    <img
                                        src={`${BASE_URL}${item.icon}`}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill"
                                        }}
                                    />
                                </div>

                                {/* Number */}
                                <p className="achievement-number">
                                    {item.counting}
                                </p>

                                {/* Title */}
                                <p className="achievement-title">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AchievementsSection;
