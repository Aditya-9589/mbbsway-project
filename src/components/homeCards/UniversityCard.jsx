import React from "react";

const UniversityCard = () => {
    const universities = [
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/LdWjEY7sIEUoxSgVRq2CHTWY4IbYzVPIhzDJLYkU.jpg",
            name: "Lord Buddha Koshi Medical College & Hospital Saharsa"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/YONJOaOgZT4bXyN81s8oFSK28JSHLSPQQ9WB8VLp.jpg",
            name: "Madhubani Medical College (MMC)"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/FeegEXm8OZ4ORIYngMLyRJGsZTomXKunhtWWsSXe.jpg",
            name: "Mata Gujri Memorial College, Kishanjraj"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/Gy1BVzvGVaI80N8pAxLFI58YZ7EobB6mkUZWZB12.jpg",
            name: "Narayan Medical College and Hospital, Sasaram"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/Thw7z5rElil0ObQYZQsIX6MiRdA2BKk5miT0no6A.jpg",
            name: "Netaji Medical College and Hospital, Bihata, Patna"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/e6ZbUD9rFcbfvK0ZPkOyBrnZQf8vhGUu0TK0SJIm.jpg",
            name: "Katihar Medical College, Katihar"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/tpD305XHySKoaZQnw3ohAaXkI8qpeaLn95Dy6Dva.jpg",
            name: "Ananya College Of Medicine & Research"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/qWW2Gm2idnO2ZqIBQzeg8JWwBTDX0JmqTsdOAk6t.jpg",
            name: "Adesh Medical College & Hospital, Kurukshetra"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/Erz5pfiELFJlKrw03Xx64KXxrtv3vR0fwAWpFSDN.jpg",
            name: "Faculty Of Medicine & Health Sciences, SGT University, Gurugram"
        },
        {
            logo: "https://admin.mbbsway.in/storage/app//public/images/university/njezOWAfkjioIxR08LTQYKDBNhfupn3g7KtogrWB.jpg",
            name: "Adesh Intitute Of Medical Science & Research, Bathinda"
        },
    ];

    return (
        <div className="homecard-box">

            <div className="homecard-header">
                <svg className="homecard-icon" viewBox="0 0 24 24" fill="white">
                    <path d="M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14z"></path>
                </svg>
                Top University
            </div>

            <div className="homecard-body scroll-y">

                {universities.map((u, idx) => (
                    <div key={idx} className="uni-row hover-fill">
                        <div className="uni-img">
                            <img src={u.logo} alt="logo" />
                        </div>
                        <p className="uni-name">{u.name}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default UniversityCard;
