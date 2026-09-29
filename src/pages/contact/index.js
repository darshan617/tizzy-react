import ContactInfo from "@/components/contact-info/ContactInfo";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const ContactInfoPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <ContactInfo />
      </Layout>
    </>
  );
};

export default ContactInfoPage;
