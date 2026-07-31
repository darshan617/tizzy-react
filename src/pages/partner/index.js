import Layout from '@/components/Layout/Layout'
import MicroSoft365 from '@/components/microsoft-365/microsoft-banner/MicroSoft365'
import PartnerBanner from '@/assets/images/partner-banner.jpg'
import React from 'react'
import PartnerWithUs from '@/components/partner-with-us/PartnerWithUs'
import Testimonial from '@/components/home/testimonials/Testimonial '
import Faq from '@/components/home/faq/Faq'

const partnerPage = () => {
  const faqList = [
    {
      question: "What is Cloud Business Email Hosting Service?",
      answer: "Cloud Email Hosting is a service setup on Cloud Computing Environment. Cloud enables high availability or uptime of service along with safety and security of stored data. Backup and disaster recovery is very fast on Cloud servers."
    },
    {
      question: "What is Tizzy®Mail?",
      answer: "Tizzy®Mail is a Cloud Business Email Hosting Solution provided by Tizzy®Cloud. It is hosted on the most advanced Cloud Computing Infrastructure of the world."
    },
    {
      question: "We have not heard about Tizzy®Mail so How old is Tizzy®Mail?",
      answer: "Tizzy®Mail has a consistent growth record of more than 7 years. We have thousands of email users comprises of small and big corporate companies."
    },
    {
      question: "How do we migrate to Tizzy®Mail?",
      answer: "Migrating to Tizzy® Mail is very easy. Our technical support specialist can help you in migrating your email services or email data to Tizzy®Mail."
    },
    {
      question: "How to renew the services next year?",
      answer: "You will get a daily email notification on your registered email address 7 days prior to the expiry date. You can reply to the email and make payment as per the invoice to process the renewal."
    }
  ]
  return (
    <Layout>
        <MicroSoft365 
        title="Services that Partners Can offer" 
        textColor="white"
        image={PartnerBanner}
        buttonText="Partner with us"
        buttonLink="/partner"
        backgroundColor="#d1e9e5"
        imageWidth={2000}
        imageHeight={2000}
        />
        <PartnerWithUs />
        <Testimonial />
        <Faq 
        data={faqList}
        />
    </Layout>
  )
}

export default partnerPage