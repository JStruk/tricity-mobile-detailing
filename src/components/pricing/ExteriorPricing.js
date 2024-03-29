import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Plan = styled.div`
  ${ tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised` }

  ${ props =>
    props.featured &&
    css`
      ${ tw`border-2 border-gray-200 shadow-none` }
    ` }
`;

const PlanHeader = styled.div`
  ${ tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg` }
  .name {
    ${ tw`font-bold text-xl` }
  }
  .price {
    ${ tw`font-bold text-4xl sm:text-5xl my-1` }
  }
  .slash {
    ${ tw`text-xl text-gray-500` }
  }
  .duration {
    ${ tw`lowercase text-gray-500 font-medium tracking-widest` }
  }
  .mainFeature {
    ${ tw`text-gray-500 text-sm font-medium tracking-wide` }
  }
`;
const PlanFeatures = styled.div`
  ${ tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm` }
  .feature {
    ${ tw`mt-5 first:mt-0 font-semibold text-gray-500` }
  }
`;

const PlanAction = tw.div`px-4 pb-8`;

export default ({
                    subheading = "",
                    heading = "Exterior Package Pricing",
                    description = "",
                    plans = null,
                    primaryButtonText = "Book Now",
                    buttonRounded = true,
                    primaryButtonUrl = '/contact-us'
                }) => {
    const defaultPlans = [
        {
            name: "Bronze",
            durationPrices: ["$50"],
            mainFeature: "Regular wash",
            features: ["Soap spray", "Hand wash", "Dry", "Glass cleaning"]
        },
        {
            name: "Silver",
            durationPrices: ["$120"],
            mainFeature: "Wash and wax",
            features: ["Bronze package plus:", "Wax", "Rims and tires cleaned + shined", "VRP on exterior plastics"]
        },
        {
            name: "Gold",
            durationPrices: ["$170"],
            mainFeature: "Wash, wax, and polish",
            features: ["Silver+Bronze packages plus:", "Wax and polish", "Finish off with carnauba wax"],
        },
        {
            name: "Platinum",
            durationPrices: ["$350"],
            mainFeature: "High-end cars",
            features: ["All packages plus:", "Clay-bar", "Finish off with carnauba wax", "For high-end vehicles"],
        }
    ];

    if (!plans) plans = defaultPlans;

    const [activeDurationIndex] = useState(0);

    return (
        <Container>
            <ContentWithPaddingXl>
                <HeaderContainer>
                    { subheading && <Subheading>{ subheading }</Subheading> }
                    <Heading>{ heading }</Heading>
                    { description && <Description>{ description }</Description> }
                </HeaderContainer>
                <PlansContainer>
                    { plans.map((plan, index) => (
                        <Plan key={ index } featured={ plan.featured }>
                            <PlanHeader>
                <span className="priceAndDuration">
                  <span className="price">{ plan.durationPrices[activeDurationIndex] }</span>
                  <span className="slash"> / </span>
                </span>
                                <span className="name">{ plan.name }</span>
                                <span className="mainFeature">{ plan.mainFeature }</span>
                            </PlanHeader>
                            <PlanFeatures>
                                { plan.features.map((feature, index) => (
                                    <span key={ index } className="feature">
                    { feature }
                  </span>
                                )) }
                            </PlanFeatures>
                            <PlanAction>
                                <PrimaryButton buttonRounded={ buttonRounded } as="a" href={ primaryButtonUrl }>
                                    { primaryButtonText }
                                </PrimaryButton>
                            </PlanAction>
                        </Plan>
                    )) }
                </PlansContainer>
            </ContentWithPaddingXl>
        </Container>
    );
};
