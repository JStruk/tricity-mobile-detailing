import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import { SEOComponent } from "../components/SEOComponent";
import Footer from "../components/Footer";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default ({links}) => {
    return (
        <>
            <AnimationRevealPage>
                <Header links={ links }/>
                <MainFeature1
                    subheading={ <Subheading>About Us</Subheading> }
                    buttonRounded={ false }
                    primaryButtonText="Book Now"
                    heading=""
                    description="Our primary goal at Top Shelf Mobile Detailing is to make your car look and smell the same as the day you drove it off the lot. All done at the convenience of your home or workplace! Everybody loves a clean car but may not have time to take it somewhere to get cleaned."
                    imageSrc="https://res.cloudinary.com/detailing-jstruk-com/image/upload/v1623092101/DSC03216_go4jk5.jpg"
                    altText={ "Top Shelf Mobile Detailing in action - about us page. Our primary goal is to make your car look and smell the same as the day you drove it off the lot, right in your own driveway " }
                />
                <MainFeature1
                    subheading=""
                    heading=""
                    buttonRounded={ false }
                    primaryButtonText="Contact Us"
                    description="Having to wait and arrange a pickup time from your detailing appointment is half the hassle, with Top Shelf Mobile Detailing we eliminate the hassle completely by coming to you. We use industry leading car care products, high quality equipment and our years of detailing knowledge to deliver you a convenient high end service."
                    imageSrc="https://res.cloudinary.com/detailing-jstruk-com/image/upload/v1623093160/IMG_2557_n0t7ns.jpg"
                    textOnLeft={ false }
                    altText={ "Top Shelf Mobile Detailing - we eliminate the need to take your vehicle somewhere and wait for it to be done. We come right to you for ease and convenience, and can detail your car virtually anywhere." }
                />
                <TeamCardGrid/>

                <SEOComponent title="About Us" description="Our mission to serve you and our team members"/>
            </AnimationRevealPage>
            <Footer/>
        </>
    );
};
