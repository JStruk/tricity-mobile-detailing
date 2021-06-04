import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;
const imageCss = tw`rounded-4xl`;

export default () => (
  <AnimationRevealPage>
    <Hero />
      <MainFeature
          subheading={''}
          heading={
              <>
                  <HighlightedText>Interior</HighlightedText>
                  <wbr /> detailing.
              </>
          }
          description={
              <Description>
                  Choose between our Bronze, Silver, and Gold interior detail packages. Treat yourself and your vehicle to a professional cleaning inside including vacuuming, shampoo, upholstery, and leather.
              </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Contact us now"
          imageSrc={
              "https://baileyscarwashanddetailing.com/wp-content/uploads/2020/12/Car-Truck-Auto-Detailing-Florence-Union-Burlington-Northern-Kentucky.jpg"
          }
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <MainFeature
          subheading={''}
          heading={
              <>
                  <HighlightedText>Exterior</HighlightedText>
                  <wbr /> detailing.
              </>
          }
          description={
              <Description>
                  Restore your vehicles look to showroom quality with our professional exterior detailing service. We offer car washing, clay-bar, wax and polish, tire and rim cleaning, and glass cleaning.
              </Description>
          }
          buttonRounded={false}
          textOnLeft={true}
          primaryButtonText="Contact us now"
          imageSrc={
              "https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
          }
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
    {/*<MainFeature />*/}
    {/*<Features />*/}
    {/*<MainFeature2 />*/}
    {/*<Portfolio />*/}
    {/*<Testimonial*/}
    {/*  subheading="Testimonials"*/}
    {/*  heading={*/}
    {/*    <>*/}
    {/*      Our Clients <span tw="text-primary-500">Love Us.</span>*/}
    {/*    </>*/}
    {/*  }*/}
    {/*  description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."*/}
    {/*  testimonials={[*/}
    {/*    {*/}
    {/*      imageSrc:*/}
    {/*        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",*/}
    {/*      profileImageSrc:*/}
    {/*        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",*/}
    {/*      quote:*/}
    {/*        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",*/}
    {/*      customerName: "Charlotte Hale",*/}
    {/*      customerTitle: "CEO, Tesla Inc."*/}
    {/*    },*/}
    {/*    {*/}
    {/*      imageSrc:*/}
    {/*        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",*/}
    {/*      profileImageSrc:*/}
    {/*        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",*/}
    {/*      quote:*/}
    {/*        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",*/}
    {/*      customerName: "Adam Cuppy",*/}
    {/*      customerTitle: "Founder, Nestle"*/}
    {/*    }*/}
    {/*  ]}*/}
    {/*  textOnLeft={true}*/}
    {/*/>*/}
    {/*<FAQ*/}
    {/*  imageSrc={customerSupportIllustrationSrc}*/}
    {/*  imageContain={true}*/}
    {/*  imageShadow={false}*/}
    {/*  subheading="FAQs"*/}
    {/*  heading={*/}
    {/*    <>*/}
    {/*      Do you have <span tw="text-primary-500">Questions ?</span>*/}
    {/*    </>*/}
    {/*  }*/}
    {/*/>*/}
    {/*<Blog />*/}
    {/*<ContactUsForm />*/}
    {/*<Footer />*/}
  </AnimationRevealPage>
);
