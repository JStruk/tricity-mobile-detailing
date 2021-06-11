import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { navLinks } from "../../pages/navLinks";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 text-center`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const landingPageBackgroundUrl = 'https://res.cloudinary.com/detailing-jstruk-com/image/upload/v1623092101/DSC03216_go4jk5.jpg';
// const landingPageBackgroundUrl = 'https://cotesautobody.com/wp-content/uploads/2018/03/AdobeStock_66932447.jpeg'; -> old one
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen`}
  background-image: url(${landingPageBackgroundUrl});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-15`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black  leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const MainDiv = tw.div`items-center justify-center flex h-screen text-white`

const SubHeadingDiv = tw.div`text-2xl text-center`

export default () => {
  return (
    <Container alt="Top Shelf Mobile Detailing Home Page">
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <MainDiv>
          <div>
            <Heading>Top Shelf Mobile Detailing</Heading>
            <SubHeadingDiv><span>Full-Service mobile car detailing. Bring your vehicle back to brand-new condition without ever leaving your own home.</span></SubHeadingDiv>
          </div>
        </MainDiv>
      </HeroContainer>
    </Container>
  );
};
