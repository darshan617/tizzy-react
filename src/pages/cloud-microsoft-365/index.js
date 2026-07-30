import Layout from '@/components/Layout/Layout'
import MicroSoft365 from '@/components/microsoft-365/microsoft-banner/MicroSoft365'
import MicrosoftPlan from '@/components/microsoft-365/microsoft-plan/MicrosoftPlan'
import WhyChooseMicrosoft from '@/components/microsoft-365/why-choose-microsoft/WhyChooseMicrosoft'
import React from 'react'

const CloudMicrosoft = () => {
  return (
    <Layout>
        <MicroSoft365 />
        <MicrosoftPlan />
        <WhyChooseMicrosoft />
    </Layout>
  )
}

export default CloudMicrosoft