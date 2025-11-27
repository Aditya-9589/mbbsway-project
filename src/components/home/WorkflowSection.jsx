import React from "react";
import "../../styles/workflow.css";
import cardBg from "../../assets/workflow/workflow-card.png"

const workflowItems = [
    {
        id: 1,
        icon: "https://admin.mbbsway.in/storage/app//public/images/work/JK9EEbCQQVb2lc6hhKvSi2s8pAoHUhS9FK2d3Fw3.png",
        title: "Preliminary Discussion",
        desc: "We gather relevant info about the candidate like score, aspirations, budget to design a detailed report.",
    },
    {
        id: 2,
        icon: "https://admin.mbbsway.in/storage/app//public/images/work/zBGA8rmWNIm5nUiejrGv3JZmyliUFTAfjf2hmwWl.png",
        title: "1-To-1 Counselling",
        desc: "Extensive Personalized session with experts for profile mapping, query resolution and admission processing.",
    },
    {
        id: 3,
        icon: "https://admin.mbbsway.in/storage/app//public/images/work/O52OELpVx0mWdl4vpOd4gJ6z5MwUeAqvjdnJSTAh.png",
        title: "Tracking & Monitoring",
        desc: "We track and monitor all the key info & notices and keep you posted through regular alerts and actionable insights.",
    },
    {
        id: 4,
        icon: "https://admin.mbbsway.in/storage/app//public/images/work/DINP1hCIIX8CTsyuXvCg3txvLx1vhsozOskjJGxQ.png",
        title: "Admission Support",
        desc: "We handhold you throughout the entire counselling process, till you secure admission in your desired college.",
    },
];

const WorkflowSection = () => {
    return (
        <div className="workflow-section">

            <div className="workflow-heading-wrapper" >
                <h2 className="workflow-heading" >Our Work Flow</h2>
                <div className="workflow-heading-underline" ></div>
            </div>

            <div className="workflow-grid">
                {workflowItems.map((item) => (
                    <div key={item.id} className="workflow-grid-item">
                        <div className="workflow-card">

                            <img src={cardBg} className="workflow-bg" alt="" />

                            <div className="workflow-number">{item.id}</div>

                            <img src={item.icon} className="workflow-icon" alt="icon" />

                            <h3 className="workflow-title">{item.title}</h3>

                            <p className="workflow-desc">{item.desc}</p>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WorkflowSection;
