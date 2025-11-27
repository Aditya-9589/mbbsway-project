// HomeCards.jsx
import React from "react";
import NoticeCard from "./NoticeCard";
import UniversityCard from "./UniversityCard";
import LinksCard from "./LinksCard";
import "../../styles/HomeCards.css";

const HomeCards = () => {
    return (
        <div className="w-full bg-white py-10">
            <div className="max-w-[1400px] mx-auto px-10">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
                <div className="grid grid-cols-1 bp900:grid-cols-3 gap-6">

                    <NoticeCard />
                    <UniversityCard />
                    <LinksCard />

                </div>
            </div>
        </div>
    );
};

export default HomeCards;
