import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgencyLandingPage from "./landing/LandingPage";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import { navLinks } from "./pages/navLinks";
import TwoColContactUsWithIllustrationFullForm from "./components/forms/TwoColContactUsWithIllustrationFullForm";
import { createBrowserHistory } from 'history';
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default function App() {
  return (
    <Router history={history}>
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
        <Route path="/">
          <AgencyLandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}
