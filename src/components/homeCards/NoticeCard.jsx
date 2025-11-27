import React from "react";

const NoticeCard = () => {
    return (
        <div className="homecard-box">
            <div className="homecard-header">
                <svg
                    className="homecard-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></path>
                </svg>
                Important Notice
            </div>

            <div className="homecard-body scroll-y">
                <div className="notice-text">
                    No Data Available
                </div>
            </div>
        </div>
    );
};

export default NoticeCard;
