import Layout from "@/components/Layout/Layout";
import MicroSoft365 from "@/components/microsoft-365/microsoft-banner/MicroSoft365";
import googleWorkspaceBanner from "@/assets/images/workspace-banner.png";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import WorkspacePlan from "@/components/google-workspace/workspace-plan/WorkspacePlan";
import WorkspaceIncludes from "@/components/google-workspace/workspace-includes/WorkspaceIncludes";
import Faq from "@/components/home/faq/Faq";
import Testimonial from "@/components/home/testimonials/Testimonial ";
import BusinessBoost from "@/components/google-workspace/business-boost/BusinessBoost";

const googleWorkspaceBannerList = [
  {
    text: "Professional business email with your domain",
    icon: (
      <BsCheckCircleFill
        size={18}
        style={{ marginRight: "10px" }}
        className="text-primary"
      />
    ),
  },
  {
    text: "Professional business email with your domain",
    icon: (
      <BsCheckCircleFill
        size={18}
        style={{ marginRight: "10px" }}
        className="text-primary"
      />
    ),
  },
  {
    text: "Professional business email with your domain",
    icon: (
      <BsCheckCircleFill
        size={18}
        style={{ marginRight: "10px" }}
        className="text-primary"
      />
    ),
  },
  {
    text: "Professional business email with your domain",
    icon: (
      <BsCheckCircleFill
        size={18}
        style={{ marginRight: "10px" }}
        className="text-primary"
      />
    ),
  },
];

const faqList = [
  {
    question: "What is a user?",
    answer: "A user is defined as one personalized email address (you@yourcompany). Group email aliases such as sales@yourcompany and support@yourcompany are included in pricing and don't count as additional users.",
  },
  {
    question: "Can I purchase individual Google Workspace apps?",
    answer: "No. When you sign up for Google Workspace, you'll gain access to a set of integrated apps that work together seamlessly. For instance, you can receive a message in Gmail and instantly convert it into a Calendar event. When you make a comment in Docs, Sheets or Slides, collaborators automatically receive email alerts. With a single click, you can join a video meeting in Meet from your inbox or calendar. Using these tools together improves productivity and gives your business the most value. However, you are welcome to purchase Google Workspace and only use the services of your choice.",
  },
  {
    question: "What is the payment plan?",
    answer: "We offer a flexible payment plan. You can add and delete users at anytime. You are billed Yearly. For more information on pricing, Contact Tizzy Cloud Sales Team.",
  },
];

const googleWorkspacePage = () => {
  return (
    <Layout>
      <MicroSoft365
        title="Google Workspace with Google AI"
        description="Work smarter and collaborate better with powerful productivity tools."
        image={googleWorkspaceBanner}
        buttonText="Authorized Google Partner"
        buttonLink="/google-workspace"
        bannerList={googleWorkspaceBannerList}
        backgroundColor="#d1e9e5"
        imageWidth={1600}
        imageHeight={20}
        objectFit="contain"
        objectPosition="right bottom"
    
      />
      <WorkspacePlan />
      <WorkspaceIncludes />
      <Testimonial />
      <Faq data={faqList} />
      <BusinessBoost />
    </Layout>
  );
};

export default googleWorkspacePage;
