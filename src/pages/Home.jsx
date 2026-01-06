import React from 'react'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeData } from '../features/home/homeSlice'

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
import ServicePackages from "../components/home/ServicePackages"
import AchievementsSection from "../components/home/AchievementsSection"
import ReviewsSection from '../components/home/ReviewsSection'
import Achievements from '../components/home/Achievements'
import SuccessFooterSection from "../components/SuccessFooterSection"
import FooterBottomNav from '../components/FooterBottomNav'
import FooterBottomInfo from "../components/FooterBottomInfo"
import FooterDevelopedBy from '../components/FooterDevelopedBy'
import FloatingExtras from "../components/FloatingExtras"


const Home = () => {

    const [stateIndex, setStateIndex] = useState(0);

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    if (loading) {
        return <div className="text-center py-20">Loading...</div>
    }

    if(error) {
        return <div className="text-center py-20 text-red-500">{error}</div>
    }

    // console.log(data);

    return (

        <div className="min-h-screen bg-white text-gray-900">
            <LayoutHeader />

            {/* 2 The shared parent wrapper */}
            <div className="w-full">

                {/* HeroSlider */}
                <HeroSlider 
                    sliders={data?.home_sliders1}
                    states={data?.states}
                    onStateChange={setStateIndex} 
                />

                {/* Info Cards */}
                <InfoCards 
                    states={data?.states}
                    stateIndex={stateIndex} 
                />

            </div>

            <HomeCards topUniversities={data?.top_university} />

            <FlipCards whyChooseUs={data?.why_choose_us?.why_choose_us} />

            <AboutFormSection aboutUs={data?.about_us} />

            <YouTube_Video video={data?.about_us} />

            <AdmissionSlider sliders={data?.home_sliders2} />

            <ServicesOffering  servicesData={data?.services} />

            <NeetConsultancy bookNowData={data?.book_now} />

            <WorkflowSection  workflowData={data?.works} />

            <BookConsultation contactData={data?.contacts} />

            <Testimonials testimonialsData={data?.testimonials} />

            <ServicePackages packagesData={data?.packages} />

            <AchievementsSection countersData={data?.counters} />

            <ReviewsSection reviewsData={data?.reviews} />

            <Achievements achievementsData={data?.achievment} />

            <SuccessFooterSection expertsData={data?.experts} />

            <FooterBottomNav />

            <FooterBottomInfo links={data?.useful_link} />

            <FooterDevelopedBy />

            <FloatingExtras />

        </div>
    )
}

export default Home