import React from "react";
import "../../styles/NeetConsultancy.css";

const NeetConsultancy = () => {
    return (
        <section className="neet-section">

            {/* Heading */}
            <div className="neet-heading-wrapper">
                <h2 className="neet-heading">
                    NEET Consultancy Services by MBBSWAY for MBBS, BDS, MD & MS Admissions
                </h2>
                <div className="neet-heading-underline"></div>
            </div>

            {/* Main Content */}
            <div className="neet-content-wrapper" >
                <div className="neet-content">
                    <div className="neet-left">
                        <h3 className="neet-left-title">
                            NEET Consultancy Services by MBBSWAY for MBBS, BDS, MD & MS Admissions
                        </h3>

                        <button className="neet-book-btn">
                            Book Now
                        </button>
                    </div>

                    <div className="neet-right">
                        <div className="neet-image-wrapper">
                            <img
                                src="https://mbbsway.in/static/media/homebooknowandadmissdoctorsimg.deda87eb95d38deab414.png"
                                alt="Doctors"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default NeetConsultancy;
