
import Benefits from "../components/HomeComponent/Benefits"
import StepsSection from "../components/HomeComponent/StepsSection"
import IndicatorsSection from "../components/HomeComponent/IndicatorsSection"
import HeroSection from "../components/HomeComponent/HeroSection"
import FooterSection from "../components/HomeComponent/FooterSection"
import Navbar from "../components/HomeComponent/Navbar"
import Banner from "../components/HomeComponent/Banner"
import { useState } from "react"

export default function Home(){

  const [activeStep, setActiveStep] = useState(1);
    return(
    <>
        <Navbar />
        <Banner />
        <Benefits activeStep={activeStep} />
        <StepsSection activeStep={activeStep} setActiveStep={setActiveStep}  />
        <IndicatorsSection />
        <HeroSection />
        <FooterSection />
    </>
    )
}