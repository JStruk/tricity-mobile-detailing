import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import { SEOComponent } from "../components/SEOComponent";
import Footer from "../components/footers/Footer";

const HighlightedText = tw.span`bg-primary-500 mr-4 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;
const imageCss = tw`rounded-4xl`;

export default () => (
    <>
        <AnimationRevealPage>
            <Hero/>
            <MainFeature
                subheading={ '' }
                heading={
                    <>
                        <HighlightedText>Interior</HighlightedText>
                        <wbr/>
                        detailing.
                    </>
                }
                description={
                    <Description>
                        Choose between our Bronze, Silver, and Gold interior detail packages. Treat yourself and your
                        vehicle
                        to a professional cleaning inside including vacuuming, shampoo, upholstery, and leather.
                    </Description>
                }
                buttonRounded={ false }
                textOnLeft={ false }
                primaryButtonText="Contact us now"
                imageSrc={
                    "https://baileyscarwashanddetailing.com/wp-content/uploads/2020/12/Car-Truck-Auto-Detailing-Florence-Union-Burlington-Northern-Kentucky.jpg"
                }
                imageCss={ imageCss }
                imageDecoratorBlob={ true }
                imageDecoratorBlobCss={ tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25` }
            />

            <MainFeature
                subheading={ '' }
                heading={
                    <>
                        <HighlightedText>Exterior</HighlightedText>
                        <wbr/>
                        detailing.
                    </>
                }
                description={
                    <Description>
                        Restore your vehicles look to showroom quality with our professional exterior detailing service.
                        We
                        offer car washing, clay-bar, wax and polish, tire and rim cleaning, and glass cleaning.
                    </Description>
                }
                buttonRounded={ false }
                textOnLeft={ true }
                primaryButtonText="Contact us now"
                imageSrc={
                    "https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
                }
                imageCss={ imageCss }
                imageDecoratorBlob={ true }
                imageDecoratorBlobCss={ tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25` }
            />
            <SEOComponent title="Home Page" description="Home"/>
        </AnimationRevealPage>
        <Footer/>
    </>
);
