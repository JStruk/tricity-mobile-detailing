import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default ({ links }) => {
  return (
    <AnimationRevealPage>
      <Header links={links} />
      <MainFeature1
        subheading={<Subheading>About Us</Subheading>}
        buttonRounded={false}
        primaryButtonText="Book Now"
        heading=""
        description="Our primary goal at Tri City Mobile Detailing is to make your car look and smell the same as the day you drove it off the lot. All done at the convenience of your home or workplace! Everybody loves a clean car but may not have time to take it somewhere to get cleaned."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading=""
        heading=""
        buttonRounded={false}
        primaryButtonText="Contact Us"
        description="Having to wait and arrange a pickup time from your detailing appoiontment is half the hassle, with Tri City Mobile Detailing we eliminate the hassle completely by coming to you. We use industry leading car care products, high quality equipment and our years of detailing knowledge to deliver you a convenient high end service."
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <TeamCardGrid
        subheading={<Subheading>Our Team</Subheading>}
      />
    </AnimationRevealPage>
  );
};
