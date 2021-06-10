import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import InteriorPricing from "components/pricing/InteriorPricing";
import ExteriorPricing from "../components/pricing/ExteriorPricing";
import { SEOComponent } from "../components/SEOComponent";
import Footer from "../components/Footer";

export default ({links}) => {
    return (
        <>
            <AnimationRevealPage>
                <Header links={ links }/>
                <InteriorPricing/>
                <ExteriorPricing/>
                <SEOComponent title="Pricing" description="The packages and services we offer to your driveway"/>
            </AnimationRevealPage>
            <Footer/>
        </>
    );
};
