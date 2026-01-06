import React from "react";

const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const UniversityCard = ({ universities = [] }) => {
    
    if (!universities.length) return null;

    return (
        <div className="homecard-box">

            <div className="homecard-header">
                <svg className="homecard-icon" viewBox="0 0 24 24" fill="white">
                    <path d="M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14z"></path>
                </svg>
                Top University
            </div>

            <div className="homecard-body scroll-y">
                {universities.map((u) => (
                    <div key={u.id} className="uni-row hover-fill">
                        <div className="uni-img">
                            <img 
                                src={`${BASE_URL}${u.logo}`} 
                                alt={u.name} 
                            />
                        </div>
                        <p className="uni-name">{u.name}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default UniversityCard;
