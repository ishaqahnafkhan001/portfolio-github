import React from 'react';
import SideNavigation from "./components/SideNavigation.jsx"; // Import the new component

// Components
import ProductGrid from "./components/Card.jsx";
import WhyUsSection from "./components/Why_us.jsx";
import FeatureShowcase from "./components/Best_features.jsx";
import ImpactSection from "./components/ImpactSection.jsx";
import FAQSection from "./components/QnA.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/Hero.jsx";
import FloatingContact from "./components/Ball_Nav.jsx";

const App = () => {
    return (
        <div className="relative min-h-screen">
            <SideNavigation />
            <FloatingContact />

            <div id="hero"><HeroSection /></div>
            <div id="products"><ProductGrid /></div>
            <div id="why-us"><WhyUsSection /></div>
            <div id="impact"><ImpactSection /></div>
            <div id="features"><FeatureShowcase /></div>
            <div id="faq"><FAQSection /></div>

            <Footer />
        </div>
    );
};
export default App;