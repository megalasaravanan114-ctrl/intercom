
import Benefits from "../components/HomeComponent/Benefits"
import StepsSection from "../components/HomeComponent/StepsSection"
import IndicatorsSection from "../components/HomeComponent/IndicatorsSection"
import HeroSection from "../components/HomeComponent/HeroSection"
import FooterSection from "../components/HomeComponent/FooterSection"
import Navbar from "../components/HomeComponent/Navbar"
import Banner from "../components/HomeComponent/Banner"

export default function Home(){
    return(
    <>
        <Navbar />
        <Banner />
        <Benefits />
        <StepsSection />
        <IndicatorsSection />
        <HeroSection />
        <FooterSection />
    </>
    )
}