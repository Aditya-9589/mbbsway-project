import React from 'react'
import "../styles/FlipCards.css"

const cardData = [
    {
        img: "https://admin.mbbsway.in/storage/app//public/images/whychooseus/sY0jsJkFBly61FGqNlf6ffpxjhsbvlBR9ZVPm7Av.png",
        title: "Dedicated Counsellors",
        description:
            "Our committed dedicated team handhold you throughout the process to make things simpler for you.",
    },
    {
        img: "https://admin.mbbsway.in/storage/app//public/images/whychooseus/lZ6DJS6HWVQhBIPwIb3R2mZofiKBIMhELOub2txJ.png",
        title: "High Success Rate",
        description:
            "We take pride in introducing MBBS WAY having one of the highest success ratio in the industry.",
    },
    {
        img: "https://admin.mbbsway.in/storage/app//public/images/whychooseus/Un57DqYggQy4c4aLwpv1QGOQg7QTYpsCmXctoeBE.png",
        title: "Commendable Track Record",
        description:
            "With our exclusively designed programs and smart counselling team, our track record has been commendable over the last 10+ years.",
    },
    {
        img: "https://admin.mbbsway.in/storage/app//public/images/whychooseus/ht3GDtilo6T7oS8Lxlq3tPO0XeLiw1WDktvA5MaG.png",
        title: "Transparent & Competitive Fee",
        description:
            "Transparency, integrity and competitive pricing is the key to our success over the last 10 years of journey.",
    },
];

const FlipCards = () => {
    return (
        <div className="flipcards-container" >
            <h2 className="why-title" >
                <span className="why-prefix">Why</span>
                <span className="why-main">Choose Us</span>
            </h2>

            <div className="flipcards-grid" >
                {cardData.map((card, index) => (
                    <div className="maincontainer" key={index} onClick={(e) => e.currentTarget.classList.toggle("flipped")} >
                        <div className="thecard" >
                            {/* FRONT */}
                            <div className="thefront" >
                                <img src={card.img} alt="icon" className="icon-img" />
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