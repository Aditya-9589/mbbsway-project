// HomeCards.jsx
import React from "react";
import NoticeCard from "./NoticeCard";
import UniversityCard from "./UniversityCard";
import LinksCard from "./LinksCard";
import "../../styles/HomeCards.css";

const HomeCards = ({ topUniversities = [] }) => {
    return (
        <div className="w-full bg-white py-10">
            <div className="max-w-[1400px] mx-auto px-10">
        
                <div className="grid grid-cols-1 bp900:grid-cols-3 gap-6">

                    <NoticeCard />
                    <UniversityCard universities={topUniversities} />
                    <LinksCard />

                </div>
            </div>
        </div>
    );
};

export default HomeCards;
