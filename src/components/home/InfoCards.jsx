import React, { useState } from "react";
import { stateCards } from "../../data/stateCards";
import "../../styles/infoCards.css";

const indexToKey = ["bihar", "gujarat", "karnataka", "madhyaPradesh"];

const InfoCards = ({ stateIndex }) => {
    const selectedKey = indexToKey[stateIndex];
    const cards = stateCards[selectedKey];

    return (
        <div className="w-full bg-white py-10">
            <div className="max-w-[1400px] mx-auto px-12">
                <div className="-mx-2 flex flex-wrap gap-y-6 px-4">

                    {cards.map((card, index) => (
                        <HoverableCard key={index} card={card} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default InfoCards;



/* ---------------------------------------------------
   ⭐ SUB-COMPONENT: CARD WITH HOVER / NORMAL STATE
--------------------------------------------------- */

const HoverableCard = ({ card }) => {
    const [isHovered, setIsHovered] = useState(false);

    const toggle = () => {
        if (window.innerWidth < 768) setIsHovered(!isHovered);
    };

    return (
        <div className="w-1/2 sm:w-1/2 lg:w-1/4 px-2">
            <div
                className="card-container relative bg-white rounded-md infocard-shadow cursor-pointer overflow-hidden"
                onMouseEnter={() => window.innerWidth > 768 && setIsHovered(true)}
                onMouseLeave={() => window.innerWidth > 768 && setIsHovered(false)}
                onClick={toggle}
            >

                {/* Normal View */}
                <div className={`absolute inset-0 normal-view ${isHovered ? "opacity-0" : "opacity-100"}`}>
                    <NormalView card={card} />
                </div>

                {/* Hover View */}
                <div className={`absolute inset-0 hover-view ${isHovered ? "opacity-100" : "opacity-0"}`}>
                    <HoverView card={card} />
                </div>

            </div>
        </div>
    );
};




/* ---------------------------------------------------
   ⭐ NORMAL CARD VIEW (DEFAULT STATE)
--------------------------------------------------- */

const NormalView = ({ card }) => {
    return (
        <div className="p-3" >
            <div className="relative w-full infocard-img">
                <img
                    src={card.img}
                    className="w-full h-full object-cover"
                    alt={card.title}
                />

                <div className="absolute bottom-[-4px] w-full h-10 infocard-gradient rounded-b-md flex items-center justify-end pr-3">
                    <p className="text-white font-semibold text-[0.9rem] px-2 infocard-title">
                        {card.title}
                    </p>
                </div>
            </div>

            <div className="mt-4 text-black-400 infocard-desc infocard-desc-text">
                {card.desc}
            </div>
        </div>
    );
};



/* ---------------------------------------------------
   ⭐ HOVER CARD VIEW (BACK SIDE)
--------------------------------------------------- */

const HoverView = ({ card }) => {
    return (
        <div className="flex flex-col justify-between w-full h-full p-3 bg-white">

            {/* Gradient Title Bar */}
            <div
                className="rounded-md px-3 py-2 text-white font-semibold"
                style={{ background: "linear-gradient(to left, #115c8e, #f4829d)" }}
            >
                {card.hoverBarTitle || card.title}
            </div>

            {/* Heading */}
            <p className="mt-3 font-semibold text-gray-700 text-[0.95rem]">
                {card.hoverHeading}
            </p>

            {/* University List */}
            <div className="flex-1 mt-2 overflow-auto space-y-4 pr-1">
                {card.hoverUniversities?.map((u, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <span className="font-bold text-[1rem]">{u.number}.</span>

                        <div className="w-12 h-12 rounded-md overflow-hidden">
                            <img src={u.logo} className="w-full h-full object-cover" />
                        </div>

                        <p className="font-medium text-sm leading-tight">{u.name}</p>
                    </div>
                ))}
            </div>

            {/* Explore Button */}
            {card.hoverButtonText && (
                // <button className="hover-explore-btn w-full text-center bg-[#064266] text-white font-semibold py-2 rounded-md mt-4 hover:opacity-90 transition">
                <button className="hover-explore-btn">
                    {card.hoverButtonText}
                </button>
            )}

        </div>
    );
};

