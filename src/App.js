import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgencyLandingPage from "./demos/LandingPage";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import { navLinks } from "./pages/navLinks";
import SimpleContactUs from "./components/forms/SimpleContactUs";
import TwoColContactUsWithIllustration from "./components/forms/TwoColContactUsWithIllustration";
import TwoColContactUsWithIllustrationFullForm from "./components/forms/TwoColContactUsWithIllustrationFullForm";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutUs links={navLinks} />
        </Route>
        <Route path="/pricing">
          <Pricing links={navLinks} />
        </Route>
        <Route path="/portfolio">
          <Portfolio links={navLinks} />
        </Route>
        <Route path="/contact-us">
          <TwoColContactUsWithIllustrationFullForm links={navLinks}/>
        </Route>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route>
        <Route path="/">
          <AgencyLandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}
