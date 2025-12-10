import React from "react";
import "../styles/FooterBottomInfo.css"; // create this file next

const FooterBottomInfo = () => {
    return (
        <div className="footer-bottom-wrapper">
            <div className="footer-bottom-container">

                {/* LEFT LINKS */}
                <div className="footer-bottom-links">
                    <a href="/paymentPolicy">Payment System</a>
                    <span className="divider">|</span>

                    <a href="/cancellationPolicy">Cancellation Policy</a>
                    <span className="divider">|</span>

                    <a href="/TermsCondition">Terms & Conditions</a>
                    <span className="divider">|</span>

                    <a href="/PrivacyPolicy">Privacy Policy</a>
                </div>

                {/* RIGHT COPYRIGHT */}
                <div className="footer-bottom-right">
                    <p>© 2024 MBBS WAY Private Limited. All Rights Reserved.</p>
                </div>

            </div>
        </div>
    );
};

export default FooterBottomInfo;
