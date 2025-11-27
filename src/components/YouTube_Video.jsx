import React from 'react'
import "../styles/YouTubeVideo.css"

const YouTube_Video = () => {
    return (
        <div className="video-section">

            {/* BACKGROUND GRADIENT BORDER FRAME */}
            <div className="video-border-frame"></div>

            {/* FRONT VIDEO CARD */}
            <div className="video-card">
                <iframe
                    src="https://www.youtube.com/embed/I0S1Vv2DrjE"
                    title="About Us"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default YouTube_Video