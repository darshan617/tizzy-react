import Faq from "@/components/home/faq/Faq";
import Testimonial from "@/components/home/testimonials/Testimonial ";
import Layout from "@/components/Layout/Layout";
import MicroSoft365 from "@/components/microsoft-365/microsoft-banner/MicroSoft365";
import MicrosoftPlan from "@/components/microsoft-365/microsoft-plan/MicrosoftPlan";
import WhyChooseMicrosoft from "@/components/microsoft-365/why-choose-microsoft/WhyChooseMicrosoft";
import React from "react";
import microsoftBanner from '@/assets/images/microsoft-banner.jpg'
import { BsCheckCircleFill } from "react-icons/bs";

const microsoftBannerList = [
  {
    text: "Professional business email with your domain",
    icon: <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/>
  },
  {
    text: "Seamless communication & team collaboration",
    icon: <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/>
  },
  {
    text: "Cloud apps for productivity anytime, anywhere",
    icon: <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/>
  },
  {
    text: "Enterprise-grade security & compliance",
    icon: <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/>
  },
];

const microsoft365FaqData = [
  {
    question: "What is Microsoft 365?",
    answer:
      "Microsoft 365 is the productivity cloud designed to help each of us achieve what matters, in our work and life, with best-in-class Office apps, intelligent cloud services, and advanced security.",
  },
  {
    question: "What happened to Office 365 business plans?",
    answer:
    <>
    Office 365 business plans are now Microsoft 365 business plans.
    <br />
    <br />
    Office 365 Business Essentials is now Microsoft 365 Business Basic
    <br />
    Office 365 Business Premium is now Microsoft 365 Business Standard
    <br />
    Microsoft 365 Business is now Microsoft 365 Business Premium
    <br />
    Office 365 Business is now Microsoft 365 Apps for business
  </>,
  },
  {
    question: "Why did you change the name from Office 365 to Microsoft 365 ?",
    answer:
      "We changed the name to be more reflective of the range of features and benefits in the subscription. Microsoft 365 includes everything you know in Office 365, including best-in-class Office apps, intelligent cloud services, and advanced security.",
  },
  {
    question: "Where business plan names have changed, has the product or price changed ?",
    answer:
      "There are no price or feature changes for small and medium business plans. The same plans are available, only with an updated name.",
  },
  {
    question: "My business has an existing Office 365 business subscription. What does the change to Microsoft 365 mean for me ?",
    answer:
      "No action is needed from you. Your Office 365 subscription will automatically be renamed to Microsoft 365. You will see the name of your subscription update to the new name across your Admin Portal and monthly billing statements.",
  },
];

const CloudMicrosoft = () => {
  return (
    <Layout>
      <MicroSoft365
        title="Microsoft 365 for Modern Workplaces"
        description="Work smarter, collaborate faster, and stay secure with Microsoft 365tools."
        image={microsoftBanner}
        buttonText="Authorized Microsoft Partner"
        buttonLink="https://marketplace.microsoft.com/en-us/partners/052e1b67-9819-44bd-a613-7f6818c78543/overview/contact"
        bannerList={microsoftBannerList}
        backgroundColor="#d1e9e5"
        imageWidth={1000}
        imageHeight={1000}
      />
      <MicrosoftPlan />
      <WhyChooseMicrosoft />
      <Testimonial />
      <Faq data={microsoft365FaqData} />
    </Layout>
  );
};

export default CloudMicrosoft;