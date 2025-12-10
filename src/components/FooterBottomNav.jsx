import React from "react";
import "../styles/FooterBottomNav.css"

const FooterBottomNav = () => {
    return (
        <div className="footer-nav-wrapper">
            <div className="footer-nav-container">

                <div className="footer-nav-group">
                    <div className="footer-nav-item">
                        <p>Home</p>
                    </div>
                    <div className="footer-nav-item">
                        <p>About</p>
                    </div>
                    <div className="footer-nav-item">
                        <p>Destinations</p>
                    </div>
                </div>

                <div className="footer-nav-group">
                    <div className="footer-nav-item">
                        <p>Universities</p>
                    </div>
                    <div className="footer-nav-item">
                        <p>NEET Predictor</p>
                    </div>
                    <div className="footer-nav-item">
                        <p>Packages</p>
                    </div>
                </div>

                <div className="footer-nav-group">
                    <div className="footer-nav-item">
                        <p>Contact Us</p>
                    </div>
                    <div className="footer-nav-item">
                        <p>Gallery</p>
                    </div>
                    <div className="footer-nav-item">
                        <p>Blog</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FooterBottomNav;
