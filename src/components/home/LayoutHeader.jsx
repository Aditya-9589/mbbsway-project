import React from "react";
import TopBar from "../TopBar";
import Header from "../Header";
import Navbar from "../Navbar";

const LayoutHeader = () => {
    return (
        <div className="w-full">
            {/* --- TopBar: full width background --- */}
            <div className="w-full bg-[#064266]">
                <div className="container-wide">
                    <TopBar />
                </div>
            </div>

            {/* --- Header: full width white background --- */}
            <div className="w-full bg-white shadow-sm">
                <div className="container-wide">
                    <Header />
                </div>
            </div>

            {/* --- Navbar: full width with border bottom --- */}
            <div className="w-full bg-white border-t border-gray-400">
                <div className="container-wide">
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default LayoutHeader;
