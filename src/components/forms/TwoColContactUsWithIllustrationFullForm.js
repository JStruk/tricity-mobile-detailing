import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import warchild from 'images/warchild.JPG'
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import Header from "../headers/light";
import { send } from 'emailjs-com';
import { useForm } from "react-hook-form";
import { SEOComponent } from "../SEOComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const PhoneNumber = tw.span`font-bold`

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })` ${tw`h-24`} `
const SelectWrapper = tw.div`flex justify-center items-center w-full my-8`
const ExteriorSelectWrapper = tw.div`flex justify-center items-center w-full`
const Select = tw.select`first:mt-0 border-b-2 py-3 mx-4 focus:outline-none font-medium w-full transition duration-300 hocus:border-primary-500 text-secondary-300`
const Option = tw.option`text-secondary-100`
const TextDiv = tw.div`text-secondary-100`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
    subheading = "Contact Us",
    heading = <><span tw="text-primary-500">Get in touch </span>
        <wbr />
        with us to book your appointment today!</>,
    description = "Give us a call or send us a message with the package you would like, preferred day(s) of the week and preferred time. We will be in touch to book your appointment.",
    phoneSection = <Description>Call us now at <PhoneNumber>(226) 749-4694</PhoneNumber> to schedule
        your appointment or contact us using the form below.</Description>,
    submitButtonText = "Send",
    formAction = "#",
    formMethod = "get",
    textOnLeft = true,
    links,
    interiorOptions = ['', 'Bronze (Basic interior detail)', 'Silver (Interior detail with shampoo)', 'Gold (Complete interior detail)'],
    exteriorOptions = ['', 'Bronze (Regular wash)', 'Silver (Wash and wax)', 'Gold (Wash, wax, and polish)', 'Platinum (Clay-bar, Carnauba wax)']
}) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [interiorPackage, setInteriorPackage] = useState('')
    const [exteriorPackage, setExteriorPackage] = useState('')

    const getSubject = () => {
        let subject = ''
        if (interiorPackage) subject += `Interior: ${interiorPackage.split('(')[0] || ''}  -  `
        if (exteriorPackage) subject += `Exterior: ${exteriorPackage.split('(')[0] || ''}`

        return subject
    }

    const onSubmit = async (e) => {
        const emailParams = {
            to_name: 'Top Shelf Mobile Detailing',
            from_name: e.from_name,
            reply_to: e.email,
            phone: e.phone,
            subject: getSubject(),
            message: e.message
        }
        try {
            await send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            toast.success("Email sent! We will be in touch ASAP!")
        } catch (e) {
            console.log('Error sending email: ', e);
        }

        reset();
    };

    const altText = 'Tyler Warford hard at work detailing his own Nissan 370Z. Complete the form to get in touch with us and book an appointment. Thank you for your interest in Top Shelf Mobile Detailing';

    return (
        <>
            <AnimationRevealPage>
                <Header links={links} />
                <Container>
                    <TwoColumn>
                        <ImageColumn>
                            <Image imageSrc={warchild} alt={altText} />
                        </ImageColumn>
                        <TextColumn textOnLeft={textOnLeft}>
                            <TextContent>
                                {subheading && <Subheading>{subheading}</Subheading>}
                                <Heading>{heading}</Heading>
                                {description && <Description>{description}</Description>}
                                {phoneSection}
                                <Form action={formAction} method={formMethod} onSubmit={handleSubmit(onSubmit)}>
                                    <Input type="text" name="from_name" placeholder="Full Name"
                                        {...register("from_name", { required: true })}
                                    />
                                    {errors.from_name && <span>What's your name?</span>}

                                    <Input type="email" name="reply_to" placeholder="Your Email Address"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span>Your Email is required</span>}

                                    <Input type="text" name="phone" placeholder="Phone Number"
                                        {...register("phone", { required: true })}
                                    />
                                    {errors.phone &&
                                        <span> Let us know your phone number so we can get in touch ASAP </span>}

                                    <SelectWrapper>
                                        <TextDiv>
                                            Interior:
                                        </TextDiv>
                                        <Select
                                            placeholder="Interior Package:"
                                            onChange={(e) => { setInteriorPackage(e.target.value) }}
                                            value={interiorPackage}
                                        >Interior Package
                                            {interiorOptions.map((option, index) => (
                                                <Option key={index} value={option} id={option}> {option}</Option>))}
                                        </Select>
                                    </SelectWrapper>

                                    <ExteriorSelectWrapper>
                                        <TextDiv>
                                            Exterior:
                                        </TextDiv>
                                        <Select
                                            placeholder="Exterior Package:"
                                            value={exteriorPackage}
                                            onChange={(e) => { setExteriorPackage(e.target.value) }}
                                        >Exterior
                                            Package
                                            {exteriorOptions.map((option, index) => (
                                                <Option key={index} value={option} id={option}> {option}</Option>))}
                                        </Select>
                                    </ExteriorSelectWrapper>

                                    {errors.subject && <span>Briefly specify which package you'd like or the reason for
                                        your email</span>}

                                    <Textarea name="message" placeholder="Your Message Here"
                                        {...register("message", { required: true })}
                                    />
                                    {errors.message && <span>This field is required</span>}
                                    <SubmitButton type="submit">{submitButtonText}</SubmitButton>
                                </Form>
                            </TextContent>
                        </TextColumn>
                    </TwoColumn>
                </Container>
                <ToastContainer />
                <SEOComponent title="Contact Us" description="Contact us to book your appointment today!" />
            </AnimationRevealPage>
            <Footer />
        </>
    );
}
