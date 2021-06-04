import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header, { NavLink, NavLinks, PrimaryLink } from "components/headers/light.js";
import InteriorPricing from "components/pricing/InteriorPricing";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
import ExteriorPricing from "../components/pricing/ExteriorPricing";

export default ({ links }) => {
  return (
    <AnimationRevealPage>
      <Header links={links} />
      <InteriorPricing />
      <ExteriorPricing />
      {/*<Testimonial*/}
      {/*  heading="Our Paying Customers"*/}
      {/*/>*/}
      {/*<FAQ />*/}
      {/*<Footer/>*/}
    </AnimationRevealPage>
  );
};
