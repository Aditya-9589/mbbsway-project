import React from "react";

const LinksCard = () => {
    const links = [
        {
            text: "Kerala MBBS Registration"
        },
        {
            text: "Regarding State Specific Merit for Second round of Counselling, Mp State combined NEET PG counselling 2024 (Dated-09-01-2025)"
        }
    ];

    return (
        <div className="homecard-box">

            <div className="homecard-header">
                <svg className="homecard-icon" viewBox="0 0 24 24" fill="white">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"></path>
                </svg>
                Useful Links
            </div>

            <div className="homecard-body scroll-y">

                {links.map((l, i) => (
                    <div key={i} className="link-item hover-fill">
                        <svg className="link-icon" viewBox="0 0 24 24">
                            <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"></path>
                        </svg>
                        {l.text}
                    </div>
                ))}

            </div>

        </div>
    );
};

export default LinksCard;
