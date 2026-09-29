import React from "react";
import Layout from "../../components/Layout/Layout";
import MailBanner from "@/components/tizzy-mail/mail-banner/MailBanner";
import PricingPlans from "@/components/tizzy-mail/pricing-plan/PricingPlans";
import WebMailFeature from "@/components/tizzy-mail/web-mail-feature/WebMailFeature";
import WhyChoose from "@/components/tizzy-mail/why-choose/WhyChoose";
import Head from "next/head";

const TizzyMail = () => {
  return (
    <>
      <Head>
        <title>Tizzy® Mail</title>
      </Head>
      <Layout>
        <MailBanner />
        <PricingPlans />
        <WebMailFeature />
        <WhyChoose />
      </Layout>
    </>
  );
};

export default TizzyMail;
