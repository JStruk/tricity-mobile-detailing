import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import ImageGallery from 'react-image-gallery';
import tw from "twin.macro";
import { SectionHeading, Subheading } from "../components/misc/Headings";
import gallery1 from 'images/portfolioGallery/gallery1.jpg'
import gallery2 from 'images/portfolioGallery/gallery2.jpg'
import gallery4 from 'images/portfolioGallery/gallery4.jpg'
import gallery5 from 'images/portfolioGallery/gallery5.jpg'
import gallery6 from 'images/portfolioGallery/gallery6.jpg'
import gallery7 from 'images/portfolioGallery/gallery7.jpg'
import gallery8 from 'images/portfolioGallery/gallery8.jpg'
import gallery10 from 'images/portfolioGallery/gallery10.jpg'
import gallery11 from 'images/portfolioGallery/gallery11.jpg'
import gallery13 from 'images/portfolioGallery/gallery13.jpg'
import gallery14 from 'images/portfolioGallery/gallery14.jpg'
import gallery15 from 'images/portfolioGallery/gallery15.jpg'
import { SEOComponent } from "../components/SEOComponent";
import Footer from "../components/Footer";

const images = [
    {
        original: gallery1,
        originalAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
        thumbnail: gallery1,
        thumbnailAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
        description: 'Full interior detail'
    },
    {
        original: gallery2,
        originalAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
        thumbnail: gallery2,
        description: 'Full interior detail on this Tesla',
        thumbnailAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
    },
    {
        original: gallery4,
        originalAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
        thumbnail: gallery4,
        description: 'Full interior detail on this Tesla',
        thumbnailAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
    },
    {
        original: gallery5,
        originalAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
        thumbnail: gallery5,
        description: 'Full interior detail on this Tesla',
        thumbnailAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
    },
    {
        original: gallery6,
        originalAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
        thumbnail: gallery6,
        description: 'Full interior detail on this Tesla',
        thumbnailAlt: 'Full interior detail on a Tesla by Top Shelf Mobile Detailing',
    },
    {
        original: gallery7,
        originalAlt: 'Platinum exterior detail on a Subaru WRX STI by Top Shelf Mobile Detailing',
        thumbnail: gallery7,
        description: 'Platinum exterior package on a Subaru WRX STI',
        thumbnailAlt: 'Platinum exterior detail on a Subaru WRX STI by Top Shelf Mobile Detailing',
    },
    {
        original: gallery8,
        originalAlt: 'Platinum exterior detail on a Subaru WRX STI by Top Shelf Mobile Detailing',
        thumbnail: gallery8,
        description: 'Platinum exterior package on a Subaru WRX STI',
        thumbnailAlt: 'Platinum exterior detail on a Subaru WRX STI by Top Shelf Mobile Detailing',
    },
    {
        original: gallery10,
        originalAlt: 'Platinum exterior detail on a 15 year old Acura RSX by Top Shelf Mobile Detailing',
        thumbnail: gallery10,
        description: 'Platinum exterior package on a 15 year old Acura RSX',
        thumbnailAlt: 'Platinum exterior detail on a 15 year old Acura RSX by Top Shelf Mobile Detailing'
    },
    {
        original: gallery11,
        originalAlt: 'Platinum exterior detail on a 15 year old Acura RSX by Top Shelf Mobile Detailing',
        thumbnail: gallery11,
        description: 'Platinum exterior package on a 15 year old Acura RSX',
        thumbnailAlt: 'Platinum exterior detail on a 15 year old Acura RSX by Top Shelf Mobile Detailing',
    },
    {
        original: gallery11,
        originalAlt: 'Platinum exterior detail on a 15 year old Acura RSX by Top Shelf Mobile Detailing (video)',
        thumbnail: gallery11,
        thumbnailAlt: 'Platinum exterior detail on a 15 year old Acura RSX by Top Shelf Mobile Detailing (video)',
        embedUrl: 'https://www.youtube.com/embed/nZPX7v17Bl8',
        renderItem: renderVideo.bind(this),
    },
    {
        original: gallery13,
        originalAlt: 'Platinum exterior detail on a Range Rover',
        thumbnail: gallery13,
        thumbnailAlt: 'Platinum exterior detail on a Range Rover',
    },
    {
        original: gallery14,
        originalAlt: 'Platinum exterior detail on this Bentley',
        thumbnail: gallery14,
        thumbnailAlt: 'Platinum exterior detail on Bentley',
    },
    {
        original: gallery15,
        originalAlt: 'Platinum exterior detail on this Bentley',
        thumbnail: gallery15,
        thumbnailAlt: 'Platinum exterior detail on this Bentley',
    },
];

function renderVideo(item) {
    return (
        <div>
            {
                <div className='video-wrapper'>
                    <iframe
                        title="Video render"
                        width='560'
                        height='315'
                        src={ item.embedUrl }
                        frameBorder='0'
                        allowFullScreen
                    />
                </div>
            }
        </div>
    );
}

const GalleryDiv = tw.div`flex m-12 justify-center`;
const SubHeadingDiv = tw.div`text-center`;
const HeadingDiv = tw.div`mt-12`;

export default ({links}) => {
    return (
        <>
            <AnimationRevealPage>
                <Header links={ links }/>
                <HeadingDiv>
                    <SectionHeading>Portfolio</SectionHeading>
                </HeadingDiv>
                <SubHeadingDiv>
                    <Subheading>Check out the pictures below to see some of our work from our satisfied
                        customers</Subheading>
                </SubHeadingDiv>
                <GalleryDiv>
                    <ImageGallery items={ images }/>
                </GalleryDiv>
                <SEOComponent title="Portfolio" description="Check out some of our previous work for our clients"/>
            </AnimationRevealPage>
            <Footer/>
        </>
    );
};
