import React from 'react'
import Image from 'next/image'
import securityIcon from '@/assets/icon/security-black.png';
import googleIcon from "@/assets/icon/googl-logo.png";
import supportIcon from "@/assets/icon/24_call_support.png";
import boostBusinessImg from "@/assets/images/boost-business-img.png";
import { FaCheckCircle } from 'react-icons/fa';
import styles from '@/components/tizzy-mail/pricing-plan/PricingPlans.module.css'
import Link from 'next/link';
const BusinessBoost = () => {
  return (
    <section className="boost-business-section position-relative" style={{ backgroundColor: '#f4f9ff' }}>
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
        <div className="boost-business-text">
          <h2 className="div-sub-title aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">We help you boost your business</h2>
          <p className="p-content aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">Empower your team with smart tools, secure communication, and AI-driven productivity—built to help your business grow faster.</p>
          <ul className="workspace-list mt-40 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
            <li><FaCheckCircle className={styles.CheckIcon}/> <strong>Professional</strong> email with your business domain</li>
            <li><FaCheckCircle className={styles.CheckIcon}/> <strong>Seamless team</strong> collaboration and communication</li>
            <li><FaCheckCircle className={styles.CheckIcon}/> <strong>AI-powered</strong> tools to work smarter and faster</li>
            <li><FaCheckCircle className={styles.CheckIcon}/> <strong>Secure cloud </strong> storage and enterprise-grade security</li>
            <li><FaCheckCircle className={styles.CheckIcon}/> <strong>Reliable support</strong> whenever you need it</li>
          </ul>
          <div className="d-flex gap-5 mt-40">
          <Link href="contact" className="tp-btn-black aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
            <span className="tp-btn-black-filter d-inline-flex align-items-center">
              <span className="tp-btn-black-text">Get Started</span>
              <span className="tp-btn-black-circle">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </span>
          </Link>
          <Link href="contact" className="tp-btn-black tp-btn-white tp-btn-white2 aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
            <span className="tp-btn-black-filter d-inline-flex align-items-center">
              <span className="tp-btn-black-text">Talk to an Expert</span>
              <span className="tp-btn-black-circle">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </span>
          </Link>
          </div>
          <div className="feature-strip d-flex flex-wrap justify-content-center align-items-center gap-4 aos-init" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600">
            <div className="feature-item">
              <Image src={securityIcon} alt="Security" width={40} height={40} />
              <span>Secure &amp; Reliable</span>
            </div>
            <span className="divider">|</span>
            <div className="feature-item">
              <Image src={googleIcon} alt="Google" width={40} height={40} />
              <span>Google-powered solutions</span>
            </div>
            <span className="divider">|</span>
            <div className="feature-item">
              <Image src={supportIcon} alt="Support" width={40} height={40} />
              <span>Quick Expert Support</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-12 d-flex align-items-end">
        <div className={`${styles.BannerImg}`}>
          <Image src={boostBusinessImg} alt="Boost Business" width={650} height={600} />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default BusinessBoost