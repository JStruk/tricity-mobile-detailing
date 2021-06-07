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
import gallery12 from 'images/portfolioGallery/gallery12.mp4'

const images = [
    {
        original: gallery11,
        thumbnail: gallery11,
        embedUrl: 'https://www.youtube.com/embed/nZPX7v17Bl8',
        description: 'rut',
        renderItem: renderVideo.bind(this)
    },
    {
        original: gallery1,
        thumbnail: gallery1,
        description: 'Full interior detail'
    },
    {
        original: gallery2,
        thumbnail: gallery2,
        description: 'Full interior detail on this Tesla'
    },
    {
        original: gallery4,
        thumbnail: gallery4,
        description: 'Full interior detail on this Tesla'
    },
    {
        original: gallery5,
        thumbnail: gallery5,
        description: 'Full interior detail on this Tesla'
    },
    {
        original: gallery6,
        thumbnail: gallery6,
        description: 'Full interior detail on this Tesla'
    },
    {
        original: gallery7,
        thumbnail: gallery7,
        description: 'Platinum exterior package on a Subaru WRX STI'
    },
    {
        original: gallery8,
        thumbnail: gallery8,
        description: 'Platinum exterior package on a Subaru WRX STI'
    },
    {
        original: gallery10,
        thumbnail: gallery10,
        description: 'Platinum exterior package on a 15 year old Acura RSX'
    },
    {
        original: gallery11,
        thumbnail: gallery11,
        description: 'Platinum exterior package on a 15 year old Acura RSX'
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
        </AnimationRevealPage>
    );
};
