import ArrowButton from "@/components/arrow-button/ArrowButton";
import Layout from "@/components/Layout/Layout";
import { selectName, setName } from "@/redux/slices/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import HeroBanner from "@/components/home/home-banner/HeroBanner";
import HomePlanCard from "@/components/home/home-plan-card/HomePlanCard";
import TizzyFeature from "@/components/home/tizzy-feature/TizzyFeature";
import HostingPlans from "@/components/home/hosting-plans/HostingPlans";
import Faq from "@/components/home/faq/Faq";
import Testimonial from "@/components/home/testimonials/Testimonial ";

const Home = () => {
  return (
    <Layout>
    <HeroBanner/>
    <HomePlanCard/>
    <TizzyFeature/>
    <HostingPlans/>
    <Faq/>
    <Testimonial/>
    </Layout>
  );
};

export default Home;
