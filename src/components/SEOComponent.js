import React from "react";
import SEO from "react-seo-component";

export function SEOComponent({ title, description, path }) {
    return <SEO
        title="Home Page"
        titleTemplate={ `${ title } - Chromax Mobile Detailing` }
        titleSeparator={ `-` }
        description={description}
        pathname={ `https://www.detailing.jstruk.com/${path}` }
        siteLanguage="en"
        siteLocale="en_ca"
        twitterUsername={ "" }
        author="Justin Struk"
    />;
}
