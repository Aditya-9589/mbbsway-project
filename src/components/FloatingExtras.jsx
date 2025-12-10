import React, { useState } from "react";
import "../styles/FloatingExtras.css"

const FloatingExtras = () => {
    const [showMarquee, setShowMarquee] = useState(true);

    return (
        <>
            {/* Admission 24–25 (vertical on right side, desktop only) */}
            <button className="admission-button">
                Admission 24-25
            </button>

            {/* Help (bottom-right) */}
            <button className="floating-btn floating-btn-help">
                <span>Help</span>
            </button>

            {/* Alerts (bottom-left) */}
            <button className="floating-btn floating-btn-alerts">
                <span>Alerts</span>
            </button>

            {/* Help & Support Marquee (fixed bottom) */}
            {showMarquee && (
                <div className="support-marquee">
                    <p className="support-marquee-label">Help &amp; Support</p>

                    <div className="support-marquee-track">
                        <div className="support-marquee-text">
                            Help Line No. : 918447968825, 918959977624 or Help &amp; Support :
                            Email ID: info@mbbsway.in, support@mbbsway.in
                        </div>
                    </div>

                    <button
                        className="support-marquee-close"
                        type="button"
                        onClick={() => setShowMarquee(false)}
                    >
                        X
                    </button>
                </div>
            )}
        </>
    );
};

export default FloatingExtras;
