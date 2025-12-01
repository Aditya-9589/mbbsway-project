import React, { useState } from 'react'
import LayoutHeader from '../components/home/LayoutHeader'
import HeroSlider from '../components/HeroSlider'
import InfoCards from '../components/home/InfoCards'
import HomeCards from '../components/homeCards/HomeCards'
import FlipCards from "../components/FlipCards"
import AboutFormSection from '../components/AboutFormSection'
import YouTube_Video from '../components/YouTube_Video'
import AdmissionSlider from '../components/AdmissionSlider'
import ServicesOffering from '../components/home/ServicesOffering'
import NeetConsultancy from '../components/home/NeetConsultancy'
import WorkflowSection from '../components/home/WorkflowSection'
import BookConsultation from '../components/home/BookConsultation'
import Testimonials from "../components/home/Testimonials"
import ServicesPackages from "../components/home/ServicePackages"


const Home = () => {

    const [stateIndex, setStateIndex] = useState(0);

    return (

        <div className="min-h-screen bg-white text-gray-900">
            <LayoutHeader />

            {/* 2 The shared parent wrapper */}
            <div className="w-full">

                {/* HeroSlider */}
                <HeroSlider onStateChange={setStateIndex} />

                {/* Info Cards */}
                <InfoCards stateIndex={stateIndex} />

            </div>

            <HomeCards />

            <FlipCards />

            <AboutFormSection />

            <YouTube_Video />

            <AdmissionSlider />

            <ServicesOffering />

            <NeetConsultancy />

            <WorkflowSection />

            <BookConsultation />

            <Testimonials />

            <ServicesPackages />

        </div>
    )
}

export default Home