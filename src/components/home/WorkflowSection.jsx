import React from "react";
import "../../styles/workflow.css";
import cardBg from "../../assets/workflow/workflow-card.png"

const BASE_URL = "https://admin.mbbsway.in/storage/app/";


const WorkflowSection = ({ workflowData }) => {

    // Safety check
    if (!workflowData) return null;

    // const { title, sub_title, works } = workflowData;
    const { title, works } = workflowData;

    const workflowItems = works || [];

    return (
        <div className="workflow-section">

            {/* Heading  */}
            <div className="workflow-heading-wrapper" >
                <h2 className="workflow-heading" >{title}</h2>
                <div className="workflow-heading-underline" ></div>
            </div>

            {/* Workflow cards  */}
            <div className="workflow-grid">
                {workflowItems.map((item, index) => (
                    <div key={item.id} className="workflow-grid-item">
                        <div className="workflow-card">

                            <img src={cardBg} className="workflow-bg" alt="" />

                            {/* Step Number  */}
                            <div className="workflow-number">{index + 1}</div>

                            {/* Icon  */}
                            <img 
                                src={`${BASE_URL}${item.icon}`} 
                                className="workflow-icon" 
                                alt={item.title} 
                            />

                            {/* Title  */}
                            <h3 className="workflow-title">{item.title}</h3>

                            {/* Description  */}
                            <p 
                                className="workflow-desc"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                            

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WorkflowSection;
