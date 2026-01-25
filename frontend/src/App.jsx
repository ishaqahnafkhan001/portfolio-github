import React from 'react';
import HookSection from "./components/First_artical.jsx";
import ProductGrid from "./components/Card.jsx";
import WhyUsSection from "./components/Why_us.jsx";
import FeatureShowcase from "./components/Best_features.jsx";
import ImpactSection from "./components/ImpactSection.jsx";
import FAQSection from "./components/QnA.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/Hero.jsx";
import FloatingContact from "./components/Ball_Nav.jsx";


const App=()=>{
    return (
        <>
            <HeroSection/>
            <HookSection/>
            <ProductGrid/>
            <WhyUsSection/>
            <ImpactSection/>
            <FeatureShowcase/>
            <FAQSection/>
            <Footer/>
            <FloatingContact/>

        </>
    )
}

export default App;