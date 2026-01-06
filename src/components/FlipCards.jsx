import React from 'react'
import "../styles/FlipCards.css"

const BASE_URL = "https://admin.mbbsway.in/storage/app/";

const FlipCards = ({ whyChooseUs = [] }) => {

    if (!whyChooseUs.length) return null;

    return (
        <div className="flipcards-container" >
            <h2 className="why-title" >
                <span className="why-prefix">Why</span>
                <span className="why-main">Choose Us</span>
            </h2>

            <div className="flipcards-grid" >
                {whyChooseUs.map((card) => (
                    <div 
                        className="maincontainer" 
                        key={card.id} 
                        onClick={(e) => 
                            e.currentTarget.classList.toggle("flipped")
                        } 
                    >
                        <div className="thecard" >
                            {/* FRONT */}
                            <div className="thefront" >
                                <img 
                                    src={`${BASE_URL}${card.icon}`} 
                                    alt={card.title} 
                                    className="icon-img" 
                                />
                                <p className="card-title" >{card.title}</p>
                            </div>

                            {/* BACK */}
                            <div className="theback" >
                                <p className="card-desc" >{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FlipCards