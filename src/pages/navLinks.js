import { NavLink, NavLinks, PrimaryLink } from "../components/headers/light";
import React from "react";

export const navLinks = [
    <NavLinks key={1}>
        <NavLink href="about">
            About
        </NavLink>
        <NavLink href="pricing">
            Pricing
        </NavLink>
        <NavLink href="portfolio">
            Portfolio
        </NavLink>
        <PrimaryLink href="/#">
            Contact
        </PrimaryLink>
    </NavLinks>,
];
