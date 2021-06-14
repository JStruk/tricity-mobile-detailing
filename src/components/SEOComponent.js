import React from "react";
import SEO from "react-seo-component";

export function SEOComponent({ title, description, path }) {
    return <SEO
        title={ title }
        titleTemplate={ 'Top Shelf Mobile Detailing' }
        titleSeparator={ `-` }
        description={description}
        pathname={ `https://www.topshelfmobiledetailing.ca/${path}` }
        siteLanguage="en"
        siteLocale="en_ca"
        twitterUsername={ "" }
        author="Justin Struk"
    />;
}
