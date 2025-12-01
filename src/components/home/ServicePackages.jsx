import React from "react";
import "../../styles/ServicePackages.css";

const packages = [
    {
        plan: "PLAN A",
        price: "8999/-",
        desc: "Information Based Counselling - Access of all contents & video provided by us.",
        features: [
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
        ],
    },
    {
        plan: "PLAN B",
        price: "22999/-",
        desc: "Personalized Counselling - Access of all contents & video provided by us.",
        features: [
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
        ],
    },
    {
        plan: "PLAN C",
        price: "79999/-",
        desc: "Assured Counselling - Access of all contents & video provided by us.",
        features: [
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
            "Score Based Analysis & Suggestions for Best Fit Colleges in your Rank.",
        ],
    },
];

const ServicePackages = () => {
    return (
        <section className="packages-section">
            <div className="packages-container">

                {/* === FIRST DIV — Heading + Underline === */}
                <div className="packages-top-wrapper">
                    <h2 className="packages-heading">Service Packages</h2>
                    <div className="packages-underline" />
                </div>

                {/* === SECOND DIV — Cards Wrapper === */}
                <div className="packages-cards-wrapper">
                    <div className="packages-grid">
                        {packages.map((item, i) => (
                            <div className="package-card" key={i}>

                                {/* === CARD HEADER === */}
                                <div className="card-header">
                                    <div className="card-plan-box">
                                        <span className="card-plan">{item.plan}</span>
                                    </div>

                                    <p className="card-desc">{item.desc}</p>

                                    <div className="card-price-box">
                                        <p className="card-price">{item.price}</p>
                                    </div>
                                </div>

                                {/* === FEATURES === */}
                                <div className="card-features">
                                    {item.features.map((f, index) => (
                                        <div className="feature-row" key={index}>
                                            <div className="tick-box">
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOqSURBVHgBlZXPbxtFFMffm7UTuIBz44K84cQFsf4LYueIhFL+giSHVo1ClRiE4JSsERwqAXYrkUQtIs6BM6nggOCw7j+A3RMHJLw+FLchtC5kd+P1znu82cRpMM4Pnrz2evbNZ777fswgnGFtdzv3Eup5YCgiooMANssfYPQB0SeAusX9+1Pukj9uPo4DZohWlOIVZphC48Hp52gCIjMTmqnmnogqr358tXIu+Bd307Yo6w3VKYaGIHcsSzemj5W13TuO1uCAUnNMMCd+sgK0A5XMFk6pPwE3BQra8pDRFiW+Il5849OrDTjHmh9u2jhheaLBFpLPli4N4WroFMXKO9SYD4lb9LdVuAhqrHBzSWDZQsjYChPIR7HleavbuRPwTx/dXQ8I7ICo0w+zpUJtsQeXtIK72OtnM6WQuRMw28kL8Uoaim/ldRSoNkimCHn6nZvjszxqTyXJU+5zAd+9v1mkjPLktvekPzGtQoJiqJlDht3LQpsCfcbaa6/dXR+Ovf35UiMiboSacpMT8YKKGOblFTAi3L0M1MQwHCReNyHnseaF5nFMjQVa7wRSlyJ0RgWa7YiAI40PTgO++eBLZxS6LZD9idh7NCCnOyC/m+h/5eMvUg1JPki8HSUhyBvFy7VrraHDF6ub638m6ufPyhvzwzFXoD2IvN8H2nk40P7jmEujoSvXlnzhQUBsZ2SF/3TfEyIYcFrj2+XlDeBs/15AoRcZJaj8yRhL7tb4fIjatE1FMflG/up1aZBj++T2cuUPTe7DAcE+6freodXsxtrpJuw/jftnQt979/abEloDb6tQQ8vI71t65rTT1xs3KnsJVQxcgPYjDe09TkpbW+Wx0FQtQcGwDgg66iDB+xITOJAMjzr++NVKZU82GaN0f6BnfzgHaixgnDOsPkEdryxUc5lJqy298nKCyezuVrkxOiEnPr16+dxuvHK9amc485vZVxPU02ni3rp2y5XCWJN0daJYFxoXQEatuFrNvRiqpjDzFmLl+zs3KuleEcZUk67pyGWztGVRFP4fKB2gJ7nKS9X4BmrGU7BReKipJNVhKsQJFDadhap9EVR8isEzbEqDOQLtHCY0O3yGI472QLpWhm1TjbKJ32NUu5rpwa/1ctpArx8tWJRrXjHOyCFiThM/C1xq1Z8nF8cpeW2h6hLxmjmITpwwXelo0vG9/PbkuiXnX80fyctYsLFXRJmlqZiIMmlCW7opb445o06+WtKBjUjRzlnV8g+V0jeZ7iy6yQAAAABJRU5ErkJggg=="
                                                    alt="tick"
                                                    className="tick-icon"
                                                />
                                            </div>
                                            <p className="feature-text">{f}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* === BUTTON === */}
                                <div className="card-button-box">
                                    <button className="package-btn">BOOK NOW</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>

    );
};

export default ServicePackages;
