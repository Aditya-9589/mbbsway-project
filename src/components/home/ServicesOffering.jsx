import React, { useState } from "react";
import "../../styles/ServicesOffering.css";

const TABS = [
    { id: "student", label: "FOR STUDENT", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGISURBVHgB7Zb/VYMwEMe/dAEzAhvYERihG9QNrBOIG7ABOoHdADdAJ6BOYDeId68XiRBKEuD1Hz7v3Qsv3C8ulwRg5cYkiERrndGwI7kjeUuS5ANLw0FJCpIffYHHRp55LCWxxYMWdiDReZ0tGZ+gI7ZxyZDSY0zQwGQOts6mY8NNpeT5jEuDTeVs+VRXNSm7SiS6jFOW7y8Bh8NKt/SScQRl3nXo8rkSkPlGxFWZ3peS1PwOoQxUYCcBss68SaYYeKdnqYApLQIxFRnT22Cce5JPhHMiSceUfBJgFMLx2sY+CXzB40scbMV2cgJHEhXSUKLLVasQAh+T3aNS5nm71fDEbFvMhbWtSg/dUnR3mBNymFuHTwZ3krXo5FgCcvzQOfkqCWrPZSE+fbehaaw9/t+WZjzJM7/jJdhjLsiZkotFy9fyP4Ny6KVSocb0i0svNHhqOTwE2Nn9kiIW3d52GQIhm63Y1lGVIKPnqdtJtzdpPqRzrQm/SZ7of/+ISMT2BW3Drqz0+AVST6+zwa8K4gAAAABJRU5ErkJggg==" },
    { id: "partnership", label: "FOR PARTNERSHIP", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgB7VbRccMgDKVdoB4hI6QTlBHSCdIN6g3sDZoNkg0yAiO4G3CdwCOo0uVxkSlgkra5fPjd6eyA0Hs8wMSYBQvuCUS04rDmH8B11xzNXNKRTvAcexkU9TcicLbQdIzkO9TtS4kNpSFieo4dx6japeg2JwYzdlGtMc5/VO+bjLZPjheOJ47XBwY/nzm+OHqOEW7F4zsOG7UJeWsyio8ZB1amAFh8wOw8xFhECj9cKNk/FIhlw75rgeJCsB2/XaZuHxd7yyS2BQFh1kTn/SDrLk465U4K3vzGfsyeQCDvskF9KE5TV1ym9rbKfhBs8Ay2eyodqanYsgs0Yz/6vWofqbA0GREuw2Gr7Q8OmCsAB1NwhqYfl4BBDZYl6qhwIipF+JyAsK6D6gj2dxA4qrYg6NJlaDUxpe4cOh2jHqJaEPcgbZQgKbC+gHyFCQ5Ue9nRaW/sEsQW/RY56wpyD/LqSyw+HTGxQ/ueChsTuUJ+uIhcDR7niCHURmPFtQ/k9uYaKAGbArEPOYq4i5fratD5P4DPEOc2qDV/BZwGIQyfYLoJsRLQYBN5kAw3IS6ICS74mxEnhFR/hBYsuHt8A7cvvYuDnsrHAAAAAElFTkSuQmCC" },
    { id: "franchisee", label: "FOR FRENCHISEE", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB7ZbhEcIgDIWj5wBsIG7iJuoGbqAb1A10A92AUXAD3SBCGzSiLYk9+6vvjquGfDwIhSsAEyLa0FxoN2x0jjEQSsVTckrkuklM1TzNJuoUmqEBThRzAkMdz2ZkWcykWQoMRfyUMffsGWWyZ5d0PG121JHKYeh31AUKUvM49EvDoDNLdKg/Fj/z/1OYxa6lHFy+g/cFNo5dpeQK5dp+MVsr+D3ga2W2YwVLNlPD4nHPPPWtOnib+OeBhXLZHaVWLJZukqOAb3wUhpaVxub/BbzOkKADpTvN6voYGnx/mz0Kz9lPhgRumeFKwdWaJLNJkAL2xCwUTO0zg+Z2N0rjTWhzQR5k1bumg+u1pZWKlT/u/fqjow2QDlyKT2FgjYajYS/D+vMOM1HftTyUks8vgNYD2yIp/wCU/MLFyu8xKwAAAABJRU5ErkJggg==" },
];

// 🔹 Temporary content – you can tweak text later
const SERVICES_CONTENT = {
    student: [
        {
            title: "Counselling",
            description:
                "Our counselling sessions will immensely benefit you in making...",
            icon: "https://admin.mbbsway.in/storage/app//public/images/service/KbWr6G1QihAGfXKN5I7R1WmKdO7qExvYpvKkbwiN.png",
        },
        {
            title: "Course, State & University selection",
            description:
                "We help you choose the ideal course, university and state that...",
            icon: "https://admin.mbbsway.in/storage/app//public/images/service/KbWr6G1QihAGfXKN5I7R1WmKdO7qExvYpvKkbwiN.png",
        },
        {
            title: "Application & Admission",
            description:
                "Choose the right intake, apply timely and smartly in courses and...",
            icon: "https://admin.mbbsway.in/storage/app//public/images/service/KbWr6G1QihAGfXKN5I7R1WmKdO7qExvYpvKkbwiN.png",
        },
    ],
    partnership: [
        {
            title: "Commissions",
            description:
                "Get faster and higher communications, expereince complete transparency...",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgB7VbRccMgDKVdoB4hI6QTlBHSCdIN6g3sDZoNkg0yAiO4G3CdwCOo0uVxkSlgkra5fPjd6eyA0Hs8wMSYBQvuCUS04rDmH8B11xzNXNKRTvAcexkU9TcicLbQdIzkO9TtS4kNpSFieo4dx6japeg2JwYzdlGtMc5/VO+bjLZPjheOJ47XBwY/nzm+OHqOEW7F4zsOG7UJeWsyio8ZB1amAFh8wOw8xFhECj9cKNk/FIhlw75rgeJCsB2/XaZuHxd7yyS2BQFh1kTn/SDrLk465U4K3vzGfsyeQCDvskF9KE5TV1ym9rbKfhBs8Ay2eyodqanYsgs0Yz/6vWofqbA0GREuw2Gr7Q8OmCsAB1NwhqYfl4BBDZYl6qhwIipF+JyAsK6D6gj2dxA4qrYg6NJlaDUxpe4cOh2jHqJaEPcgbZQgKbC+gHyFCQ5Ue9nRaW/sEsQW/RY56wpyD/LqSyw+HTGxQ/ueChsTuUJ+uIhcDR7niCHURmPFtQ/k9uYaKAGbArEPOYq4i5fratD5P4DPEOc2qDV/BZwGIQyfYLoJsRLQYBN5kAw3IS6ICS74mxEnhFR/hBYsuHt8A7cvvYuDnsrHAAAAAElFTkSuQmCC",
        },
        {
            title: "Empowering You",
            description:
                "Attend webinars by MBBSWALA Experts and University Delegates t...",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgB7VbRccMgDKVdoB4hI6QTlBHSCdIN6g3sDZoNkg0yAiO4G3CdwCOo0uVxkSlgkra5fPjd6eyA0Hs8wMSYBQvuCUS04rDmH8B11xzNXNKRTvAcexkU9TcicLbQdIzkO9TtS4kNpSFieo4dx6japeg2JwYzdlGtMc5/VO+bjLZPjheOJ47XBwY/nzm+OHqOEW7F4zsOG7UJeWsyio8ZB1amAFh8wOw8xFhECj9cKNk/FIhlw75rgeJCsB2/XaZuHxd7yyS2BQFh1kTn/SDrLk465U4K3vzGfsyeQCDvskF9KE5TV1ym9rbKfhBs8Ay2eyodqanYsgs0Yz/6vWofqbA0GREuw2Gr7Q8OmCsAB1NwhqYfl4BBDZYl6qhwIipF+JyAsK6D6gj2dxA4qrYg6NJlaDUxpe4cOh2jHqJaEPcgbZQgKbC+gHyFCQ5Ue9nRaW/sEsQW/RY56wpyD/LqSyw+HTGxQ/ueChsTuUJ+uIhcDR7niCHURmPFtQ/k9uYaKAGbArEPOYq4i5fratD5P4DPEOc2qDV/BZwGIQyfYLoJsRLQYBN5kAw3IS6ICS74mxEnhFR/hBYsuHt8A7cvvYuDnsrHAAAAAElFTkSuQmCC",
        },
        {
            title: "A Team that Understands your Needs",
            description:
                "Receive comprehensive handholding and support from our...",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgB7VbRccMgDKVdoB4hI6QTlBHSCdIN6g3sDZoNkg0yAiO4G3CdwCOo0uVxkSlgkra5fPjd6eyA0Hs8wMSYBQvuCUS04rDmH8B11xzNXNKRTvAcexkU9TcicLbQdIzkO9TtS4kNpSFieo4dx6japeg2JwYzdlGtMc5/VO+bjLZPjheOJ47XBwY/nzm+OHqOEW7F4zsOG7UJeWsyio8ZB1amAFh8wOw8xFhECj9cKNk/FIhlw75rgeJCsB2/XaZuHxd7yyS2BQFh1kTn/SDrLk465U4K3vzGfsyeQCDvskF9KE5TV1ym9rbKfhBs8Ay2eyodqanYsgs0Yz/6vWofqbA0GREuw2Gr7Q8OmCsAB1NwhqYfl4BBDZYl6qhwIipF+JyAsK6D6gj2dxA4qrYg6NJlaDUxpe4cOh2jHqJaEPcgbZQgKbC+gHyFCQ5Ue9nRaW/sEsQW/RY56wpyD/LqSyw+HTGxQ/ueChsTuUJ+uIhcDR7niCHURmPFtQ/k9uYaKAGbArEPOYq4i5fratD5P4DPEOc2qDV/BZwGIQyfYLoJsRLQYBN5kAw3IS6ICS74mxEnhFR/hBYsuHt8A7cvvYuDnsrHAAAAAElFTkSuQmCC",
        },
    ],
    franchisee: [
        {
            title: "Experience",
            description:
                "Entrepreneurs with relevant industry experience",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB7ZbhEcIgDIWj5wBsIG7iJuoGbqAb1A10A92AUXAD3SBCGzSiLYk9+6vvjquGfDwIhSsAEyLa0FxoN2x0jjEQSsVTckrkuklM1TzNJuoUmqEBThRzAkMdz2ZkWcykWQoMRfyUMffsGWWyZ5d0PG121JHKYeh31AUKUvM49EvDoDNLdKg/Fj/z/1OYxa6lHFy+g/cFNo5dpeQK5dp+MVsr+D3ga2W2YwVLNlPD4nHPPPWtOnib+OeBhXLZHaVWLJZukqOAb3wUhpaVxub/BbzOkKADpTvN6voYGnx/mz0Kz9lPhgRumeFKwdWaJLNJkAL2xCwUTO0zg+Z2N0rjTWhzQR5k1bumg+u1pZWKlT/u/fqjow2QDlyKT2FgjYajYS/D+vMOM1HftTyUks8vgNYD2yIp/wCU/MLFyu8xKwAAAABJRU5ErkJggg==",
        },
        {
            title: "Financial Resources",
            description:
                "Good financial backing and investment potential.",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB7ZbhEcIgDIWj5wBsIG7iJuoGbqAb1A10A92AUXAD3SBCGzSiLYk9+6vvjquGfDwIhSsAEyLa0FxoN2x0jjEQSsVTckrkuklM1TzNJuoUmqEBThRzAkMdz2ZkWcykWQoMRfyUMffsGWWyZ5d0PG121JHKYeh31AUKUvM49EvDoDNLdKg/Fj/z/1OYxa6lHFy+g/cFNo5dpeQK5dp+MVsr+D3ga2W2YwVLNlPD4nHPPPWtOnib+OeBhXLZHaVWLJZukqOAb3wUhpaVxub/BbzOkKADpTvN6voYGnx/mz0Kz9lPhgRumeFKwdWaJLNJkAL2xCwUTO0zg+Z2N0rjTWhzQR5k1bumg+u1pZWKlT/u/fqjow2QDlyKT2FgjYajYS/D+vMOM1HftTyUks8vgNYD2yIp/wCU/MLFyu8xKwAAAABJRU5ErkJggg==",
        },
        {
            title: "Business Acumen",
            description:
                "Proven management capabilities and exceptional business traits.",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB7ZbhEcIgDIWj5wBsIG7iJuoGbqAb1A10A92AUXAD3SBCGzSiLYk9+6vvjquGfDwIhSsAEyLa0FxoN2x0jjEQSsVTckrkuklM1TzNJuoUmqEBThRzAkMdz2ZkWcykWQoMRfyUMffsGWWyZ5d0PG121JHKYeh31AUKUvM49EvDoDNLdKg/Fj/z/1OYxa6lHFy+g/cFNo5dpeQK5dp+MVsr+D3ga2W2YwVLNlPD4nHPPPWtOnib+OeBhXLZHaVWLJZukqOAb3wUhpaVxub/BbzOkKADpTvN6voYGnx/mz0Kz9lPhgRumeFKwdWaJLNJkAL2xCwUTO0zg+Z2N0rjTWhzQR5k1bumg+u1pZWKlT/u/fqjow2QDlyKT2FgjYajYS/D+vMOM1HftTyUks8vgNYD2yIp/wCU/MLFyu8xKwAAAABJRU5ErkJggg==",
        },
    ],
};

const ServicesOffering = () => {
    const [activeTab, setActiveTab] = useState("student");
    const services = SERVICES_CONTENT[activeTab];

    return (
        <section className="services-section">
            <div className="services-container">
                {/* Heading */}
                <div className="services-header">
                    <h2 className="services-title">
                        MBBSWAY <span>Services &amp; Offerings</span>
                    </h2>
                    <div className="services-title-underline" />
                </div>

                <div className="services-layout">
                    {/* Left Tabs */}
                    <div className="services=tabs" >
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                className={`services-tab ${activeTab === tab.id ? "active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="services-tab-icon" >
                                    <img src={tab.icon} alt={tab.label} />
                                </span>

                                <span className="services-tab-label" >{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right Cards + Curve */}
                    <div className="services-cards-area">
                        {/* Decorative curve behind cards */}
                        <div className="services-curve" />
                        <div className="services-curve-second" />

                        <div className="services-cards-grid">
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className={`service-card service-card-${index}`}
                                >
                                    {/* side dots */}
                                    <span className="service-card-dot service-card-dot-left" />
                                    <span className="service-card-dot service-card-dot-right" />

                                    {/* blue outer frame */}
                                    <div className="service-card-frame">
                                        {/* pink inner frame */}
                                        <div className="service-card-inner">
                                            <div className="service-card-icon">
                                                {/* temporary icon image – change src later */}
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                // style={{"--icon-mask": `url(${service.icon})`}}
                                                />
                                            </div>
                                            <h3 className="service-card-title">{service.title}</h3>
                                            <p className="service-card-desc">
                                                {service.description}
                                            </p>
                                            <div className="service-card-bottom-line" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="services-know-more-btn" type="button">
                            KNOW MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOffering;
