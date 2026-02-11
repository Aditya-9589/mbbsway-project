import React from "react";
import "../../styles/NeetConsultancy.css";

const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const NeetConsultancy = ({ bookNowData }) => {

    if (!bookNowData) return null;

    const { title, sub_title } = bookNowData;

    return (
        <section className="neet-section">

            {/* Heading */}
            <div className="neet-heading-wrapper">
                <h2 className="neet-heading">
                    {title}
                </h2>
                <div className="neet-heading-underline"></div>
            </div>

            {/* Main Content */}
            <div className="neet-content-wrapper" >
                <div className="neet-content">

                    <div className="neet-left">
                        <h3 className="neet-left-title">
                            {sub_title}
                        </h3>

                        <button className="neet-book-btn">
                            Book Now
                        </button>
                    </div>

                    <div className="neet-right">
                        <div className="neet-image-wrapper">
                            <img
                                // src={`${BASE_URL}${banner}`}
                                src="https://mbbsway.in/static/media/homebooknowandadmissdoctorsimg.deda87eb95d38deab414.png"
                                alt="NEET Consultancy"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default NeetConsultancy;
