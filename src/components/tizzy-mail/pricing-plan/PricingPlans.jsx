import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import styles from '@/components/tizzy-mail/pricing-plan/PricingPlans.module.css'

const plans = [
  {
    aosClass: 'aos-init aos-animate',
    aosDuration: '600',
    title: 'Tizzy® Mail 10 GB',
    label: 'Basic',
    price: '₹792',
    features: [
      'Space per Email ID: 10 GB',
      'User Friendly Webmail Access',
      'Email Client Setup',
      'Mobile Webmail',
      '50 GB Data Transfer Bandwidth per Month',
      '150 Outgoing Emails Limit per Hour',
    ],
  },
  {
    aosClass: 'aos-init aos-animate',
    aosDuration: '800',
    title: 'Tizzy® Mail Silver – 30 GB',
    label: 'Silver',
    price: '₹1716',
    features: [
      'Space per Email ID: 30 GB',
      'User Friendly Webmail Access',
      'Email Client Setup',
      'Mobile Webmail',
      '100 GB Data Transfer Bandwidth per Month',
      '250 Outgoing Emails Limit per Hour',
    ],
  },
  {
    aosClass: 'aos-init aos-animate',
    aosDuration: '1000',
    title: 'Tizzy® Mail Platinum – 50 GB',
    label: 'Platinum',
    price: '₹2850 ',
    features: [
      'Space per Email ID: 50 GB',
      'User Friendly Webmail Access',
      'Email Client Setup',
      'Mobile Webmail',
      '200 GB Data Transfer Bandwidth per Month',
      '250 Outgoing Emails Limit per Hour',
    ],
  },
  {
    aosClass: 'aos-init',
    aosDuration: '1200',
    title: 'Tizzy® Mail Enterprise – 100 GB',
    label: 'Enterprise',
    price: '₹5000',
    features: [
      'Space per Email ID: 100 GB',
      'User Friendly Webmail Access',
      'Email Client Setup',
      'Mobile Webmail',
      '300 GB Data Transfer Bandwidth per Month',
      '250 Outgoing Emails Limit per Hour',
    ],
  },
  {
    aosClass: 'aos-init',
    aosDuration: '1400',
    title: 'Tizzy® Mail Corporate – 1 TB',
    label: 'Corporate',
    price: '₹8000',
    features: [
      'Space per Email ID: 1 TB',
      'User Friendly Webmail Access',
      'Email Client Setup',
      'Mobile Webmail',
      '300 GB Data Transfer Bandwidth per Month',
      '250 Outgoing Emails Limit per Hour',
    ],
  },
]

const PricingPlans = () => {
  return (
    <section className="workspace-plan-section pt-100 pb-100" id="pricing" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-12 col-12">
            <div className="workspace-plan-title text-center">
              <h2
                className="div-sub-title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Tizzy® Mail INDIA <br /> Cloud Business Email Hosting Plans on Amazon AWS
              </h2>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="aos-init aos-animate"
              >
                AI &amp; Machine Learning–based Email Security with Tizzy Mail Enterprise &amp; Corporate Plans.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 }`}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={plan.aosDuration}
            >
              <div className="plan-box workspace-plan-box">
                <div className="best-value">
                  <h3 className="div-text mb-0 weight-Bold">{plan.title}</h3>
                </div>
                <div className="plans-details">
                  <h4 className="small-text mb-0 weight-SemiBold most-popular">{plan.label}</h4>
                  <div className="plans-details-text">
                    <h5 className="div-title mb-0 weight-SemiBold">{plan.price}</h5>
                    <span className="extra-small-text d-block mb-0">User/Month</span>
                    <span className="extra-small-text d-block mb-0">GST 18% Additional</span>
                  </div>
                  <div className="plans-details-text microsoft-360-buy-btn">
                    <button
                      type="button"
                      className="buy-now"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Inquiry Now
                    </button>
                  </div>
                  <div className="qty-wrapper-bg features">
                    <h6 className="p-content mb-0 weight-SemiBold">Top Features</h6>
                  </div>
                  <div className="more-details-box">
                    <ul className="plans-details-list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <FaCheckCircle size={16} className={`${styles.CheckIcon} me-2`}/>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="plans-details-text-bottom">
                      
                        <Link href="#"
                        className="more-details p-content"
                        style={{ display: 'none' }}
                      >
                        See All Features
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPlans