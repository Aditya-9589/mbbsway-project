import React from "react";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Destinations", hasDropdown: true },
        { name: "Course", hasDropdown: true },
        { name: "NEET Predictor", link: "/neetpredictor" },
        { name: "Packages", link: "/packages" },
        { name: "Contact Us", link: "/contact" },
        { name: "Gallery", link: "/gallery" },
        { name: "Blog", link: "/blog" },
    ];

    return (
        <div className="bg-white border-t max-[900px]:hidden">
            <div className="container-navbar">

                <nav
                    className="
                        flex items-center justify-center
                        py-2

                        gap-14
                        max-[1500px]:gap-12
                        max-[1380px]:gap-8
                        max-[1224px]:gap-10
                        max-[1100px]:gap-8
                        max-[1024px]:gap-6

                        pl-[300px]
                        max-[1600px]:pl-[260px]
                        max-[1500px]:pl-[220px]
                        max-[1380px]:pl-[120px]
                        max-[1300px]:pl-[100px]
                        max-[1200px]:pl-[60px]
                        max-[1100px]:pl-[40px]
                        max-[1000px]:pl-[20px]

                        pr-[20px]
                    "
                >


                    {menuItems.map((item) => {
                        const isActive = item.link === location.pathname;

                        return (
                            <a
                                key={item.name}
                                href={item.link || "#"}
                                className={`
                                    flex items-center gap-1
                                    font-semibold tracking-tight 
                                    font-['Montserrat',sans-serif]
                                    transition-colors duration-300

                                    text-[14px]
                                    max-[1224px]:text-[13px]
                                    max-[1100px]:text-[12px]
                                    max-[1024px]:text-[11px]

                                    ${isActive ? "text-[#EA244F]" : "text-[#333]"}
                                    hover:text-[#EA244F]
                                `}
                            >
                                {item.name}

                                {item.hasDropdown && (
                                    <ChevronDown
                                        size={16}
                                        strokeWidth={2}
                                        className={`
                                            transition-colors
                                            ${isActive ? "text-[#EA244F]" : "text-[#333]"}
                                        `}
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
